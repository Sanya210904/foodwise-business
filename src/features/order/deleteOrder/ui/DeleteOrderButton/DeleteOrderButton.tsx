import { FC } from 'react';
import { View } from 'react-native';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import TrashIcon from '@src/shared/assets/icons/trashIcon.svg';
import { styles } from './styles';

type DeleteOrderButtonProps = {
  onDelete: () => void;
};

const DeleteOrderButton: FC<DeleteOrderButtonProps> = props => {
  const { onDelete } = props;
  const isLoading = useAppSelector(state => state.orders.isLoading.delete);

  return (
    <View style={styles.block}>
      <CustomButton
        style={styles.button}
        type={ButtonType.CLEAR}
        isLoading={isLoading}
        Icon={TrashIcon}
        iconProps={{ width: 36 }}
        onPress={onDelete}
      />
    </View>
  );
};

export default DeleteOrderButton;
