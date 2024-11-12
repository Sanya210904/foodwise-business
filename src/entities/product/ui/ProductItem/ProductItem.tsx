import React, { FC } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { API_MAIN_IMAGE_URL } from '@env';

type ProductItemProps = {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  isEdit: boolean;
  onRemovePress?: any;
  onCardPress?: any;
};

const ProductItem: FC<ProductItemProps> = props => {
  const { id, imageUrl, title, price, isEdit, onRemovePress, onCardPress } =
    props;

  return (
    <View style={[styles.block]}>
      <TouchableOpacity
        disabled={isEdit}
        onPress={() => onCardPress(id)}
        activeOpacity={0.75}>
        <Image
          source={{
            uri: `${API_MAIN_IMAGE_URL}/${imageUrl}`,
          }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text numberOfLines={2} style={styles.infoTitle}>
            {title}
          </Text>
          <Text style={styles.infoPrice}>₴{price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
