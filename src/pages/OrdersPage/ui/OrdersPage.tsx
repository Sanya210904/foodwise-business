import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { OrderList, OrderTabs } from '@src/widgets/order';

const OrdersPage = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Orders</Text>
        <OrderTabs />
      </View>

      <OrderList />
    </SafeAreaView>
  );
};

export default OrdersPage;
