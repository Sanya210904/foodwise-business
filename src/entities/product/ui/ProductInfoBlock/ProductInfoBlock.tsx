import { API_MAIN_IMAGE_URL } from '@env';
import React, { FC } from 'react';
import { View, Text, Image, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

type ProductInfoBlockProps = {
  title: string;
  image: string;
  price: string;
  discountPrice: string | null;
  style?: StyleProp<ViewStyle>;
};

const ProductInfoBlock: FC<ProductInfoBlockProps> = props => {
  const { title, image, price, discountPrice, style } = props;

  return (
    <View style={style}>
      <View style={styles.imageBlock}>
        <Image
          style={styles.image}
          source={{ uri: `${API_MAIN_IMAGE_URL}/${image}` }}
        />
        <View style={styles.priceBlock}>
          {discountPrice && (
            <Text style={styles.discountPriceText}>${discountPrice}</Text>
          )}
          <Text style={styles.priceText}>${price}</Text>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ProductInfoBlock;
