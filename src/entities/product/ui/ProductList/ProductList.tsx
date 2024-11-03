import React, { useEffect } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import ProductItem from '../ProductItem/ProductItem';
import { FlashList } from '@shopify/flash-list';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import { fetchProducts } from '../../api/services/fetchProducts';
import { styles } from './styles';
import { offsets } from '@src/app/styles/offsets';

const screenWidth = Dimensions.get('screen').width;
const cardColumnGap = 14;
const cardWidth =
  (screenWidth - offsets.containerOffsetHorizontal * 2 - cardColumnGap) / 2;

const ProductList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.products);
  const isLoading = useAppSelector(state => state.products.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
            imageUrl={item.image}
            price={item.price.$numberDecimal}
            isEdit={false}
          />
        )}
      />
    </View>
  );
};

export default ProductList;
