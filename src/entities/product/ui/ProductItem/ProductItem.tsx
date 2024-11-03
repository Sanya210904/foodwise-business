import React, { FC } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Dimensions,
  DimensionValue,
} from 'react-native';
// import CloseIcon from '../../../../assets/icons/closeIcon.svg';
import NoImage from '@src/shared/assets/images/noimage.png';
import { styles } from './styles';

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
        {/* {isEdit && (
          <TouchableHighlight
            onPress={() => onRemovePress(id)}
            style={styles.closeButton}>
            <CloseIcon width={15} height={15} />
          </TouchableHighlight>
        )} */}
        <Image
          source={require('../../../../shared/assets/images/noimage.png')}
          style={styles.image}
        />
        {/* <Image
          source={{
            uri: NoImage,
          }}
          style={styles.image}
        /> */}
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
