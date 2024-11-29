import { useEffect } from 'react';
import { styles } from './styles';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import { FlashList } from '@shopify/flash-list';
import { fetchOrders } from '@src/entities/order';
import { ActivityIndicator, View } from 'react-native';
import DeleteOrderItem from '@src/features/order/deleteOrder/ui/DeleteOrderItem/DeleteOrderItem';

const OrderList = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(state => state.orders.orders);
  const isLoading = useAppSelector(state => state.orders.isLoading.list);
  const orderFilter = useAppSelector(state => state.orders.orderFilter);

  useEffect(() => {
    dispatch(fetchOrders(orderFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderFilter]);

  if (isLoading) {
    return (
      <View style={styles.loaderBlock}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <FlashList
      data={orders}
      estimatedItemSize={116}
      keyExtractor={({ _id }) => _id}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => (
        <DeleteOrderItem
          id={item._id}
          title={item.title}
          expDate={item.expiration_date}
          image={item.image}
          quantity={item.quantity}
          discount={item.discount}
        />
      )}
    />
  );
};

export default OrderList;
