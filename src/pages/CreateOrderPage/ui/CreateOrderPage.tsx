import React from 'react';
import { View, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RouteName } from '@src/app/providers/router/model/constants/RouteName';
import { TypeRootStackParamsList } from '@src/app/providers/router/model/types/TypeRootStackParamsList';
import CreateOrderForm from '@src/features/order/createOrder/ui/CreateOrderForm/CreateOrderForm';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import { ProductInfoBlock } from '@src/entities/product';
import DismissKeyboard from '@src/shared/ui/DismissKeyboard/DismissKeyboard';

const CreateOrderPage = () => {
  const route =
    useRoute<RouteProp<TypeRootStackParamsList, RouteName.CREATE_ORDER>>();
  const { id, image, title, price } = route.params;
  const discountPrice = useAppSelector(
    state => state.orderCreate.discountPrice,
  );

  return (
    <SafeAreaView style={styles.screen}>
      <DismissKeyboard>
        <View style={styles.container}>
          <ProductInfoBlock
            style={styles.infoBlock}
            image={image}
            title={title}
            price={price}
            discountPrice={discountPrice}
          />

          <View style={styles.formWrapper}>
            <CreateOrderForm productId={id} price={price} />
          </View>
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

export default CreateOrderPage;
