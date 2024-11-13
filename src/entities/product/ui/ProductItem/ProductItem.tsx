import React, { FC } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { API_MAIN_IMAGE_URL } from '@env';
import { useAtom } from 'jotai';
import { isEditAtom } from '@src/app/providers/atoms/editAtom';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';

type ProductItemProps = {
  id: string;
  imageId: string;
  title: string;
  price: string;
  isEdit?: boolean;
  onRemove: (id: string) => void;
  onCardPress: (id: string) => void;
};

const ProductItem: FC<ProductItemProps> = props => {
  const { id, imageId, title, price, onRemove, onCardPress } = props;
  const [isEdit, setEdit] = useAtom(isEditAtom);
  return (
    <View style={[styles.block]}>
      <TouchableOpacity
        disabled={isEdit}
        onPress={() => onCardPress(id)}
        activeOpacity={0.75}>
        {isEdit && (
          <CustomButton
            width={29}
            height={29}
            title="x"
            onPress={() => onRemove(id)}
            type={ButtonType.SECONDARY}
            style={styles.closeButton}
          />
        )}
        <Image
          source={{
            uri: `${API_MAIN_IMAGE_URL}/${imageId}`,
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
