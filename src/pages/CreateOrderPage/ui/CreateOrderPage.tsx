import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RouteName } from '@src/app/providers/router/model/constants/RouteName';
import { TypeRootStackParamsList } from '@src/app/providers/router/model/types/TypeRootStackParamsList';
import CreateOrderForm from '@src/features/order/createOrder/ui/CreateOrderForm/CreateOrderForm';

const CreateOrderPage = () => {
  const route =
    useRoute<RouteProp<TypeRootStackParamsList, RouteName.CREATE_ORDER>>();
  const productId = route.params.id;

  useEffect(() => {});

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <CreateOrderForm />
      </View>
    </SafeAreaView>
  );
};

export default CreateOrderPage;
