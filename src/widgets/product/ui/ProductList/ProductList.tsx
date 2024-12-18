import { useEffect } from 'react';
import { View } from 'react-native';
import { ProductItem } from '@src/entities/product';
import { FlashList } from '@shopify/flash-list';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import { styles } from './styles';
import { useAppNavigation } from '@src/shared/hooks/useAppNavigation';
import { fetchProducts } from '@src/entities/product/api/services/fetchProducts';
import { fetchDeleteProduct } from '@src/features/product/deleteProduct';
import { RouteName } from '@src/app/providers/router/model/constants/RouteName';

const ProductList = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const products = useAppSelector(state => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCardPress = (
    id: string,
    image: string,
    title: string,
    price: string,
  ) => {
    navigation.navigate(RouteName.CREATE_ORDER, { id, image, title, price });
  };

  const handleDeleteProduct = (id: string) => {
    dispatch(fetchDeleteProduct(id));
  };

  return (
    <View style={styles.listWrapper}>
      <FlashList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
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
