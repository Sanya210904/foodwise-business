import React, { useEffect } from 'react';
import { styles } from './styles';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import { FlashList } from '@shopify/flash-list';
import { fetchOrders, OrderItem } from '@src/entities/order';
import { ActivityIndicator, View } from 'react-native';

const OrderList = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(state => state.orders.orders);
  const isLoading = useAppSelector(state => state.orders.isLoading);
  const error = useAppSelector(state => state.orders.error);
  const orderFilter = useAppSelector(state => state.orders.orderFilter);

  useEffect(() => {
    dispatch(fetchOrders(orderFilter));
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
        <OrderItem
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
