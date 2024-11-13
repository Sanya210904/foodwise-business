import React, { useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import { ProductItem } from '@src/entities/product';
import { FlashList } from '@shopify/flash-list';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import { styles } from './styles';
import { offsets } from '@src/app/styles/offsets';
import { useAppNavigation } from '@src/shared/hooks/useAppNavigation';
import { fetchProducts } from '@src/entities/product/api/services/fetchProducts';
import { fetchDeleteProduct } from '@src/features/deleteProduct';

const screenWidth = Dimensions.get('screen').width;
const cardColumnGap = 14;
const cardWidth =
  (screenWidth - offsets.containerOffsetHorizontal * 2 - cardColumnGap) / 2;

const ProductList = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const products = useAppSelector(state => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleCardPress = (id: string) => {};

  const handleDeleteProduct = (id: string) => {
    dispatch(fetchDeleteProduct(id));
  };

  return (
    <View style={styles.listWrapper}>
      <FlashList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
        numColumns={2}
        data={products}
        estimatedItemSize={192}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ProductItem
            id={item._id}
            title={item.title}
            imageId={item.image}
            price={item.price.$numberDecimal}
            onCardPress={handleCardPress}
            onRemove={handleDeleteProduct}
          />
        )}
      />
    </View>
  );
};

export default ProductList;
