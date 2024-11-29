import { FC } from 'react';
import { OrderItem } from '@src/entities/order';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import DeleteOrderButton from '../DeleteOrderButton/DeleteOrderButton';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import { fetchDeleteOrder } from '../../api/services/fetchDeleteOrder';
import { styles } from './styles';

type DeleteOrderItemProps = {
  id: string;
  title: string;
  image: string;
  quantity: number;
  discount: number;
  expDate: string;
};

const END_POSITION = -70;

const DeleteOrderItem: FC<DeleteOrderItemProps> = props => {
  const dispatch = useAppDispatch();
  const swipeXPosition = useSharedValue(0);
  const isSwiped = useSharedValue(false);

  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .onUpdate(e => {
      if (e.translationX < 0) {
        swipeXPosition.value = e.translationX;
      }
    })
    .onEnd(() => {
      const toShowButton = swipeXPosition.value < END_POSITION / 2;

      if (toShowButton && !isSwiped.value) {
        swipeXPosition.value = withTiming(END_POSITION, {}, () => {
          isSwiped.value = true;
        });
      } else {
        swipeXPosition.value = withTiming(0);
        isSwiped.value = false;
      }
    });

  const animatedOrderItemStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: swipeXPosition.value }],
  }));

  const handleDeleteOrder = () => {
    dispatch(fetchDeleteOrder(props.id));
  };

  return (
    <>
      <DeleteOrderButton onDelete={handleDeleteOrder} />
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[animatedOrderItemStyle, styles.wrapper]}>
          <OrderItem {...props} />
        </Animated.View>
      </GestureDetector>
    </>
  );
};

export default DeleteOrderItem;
