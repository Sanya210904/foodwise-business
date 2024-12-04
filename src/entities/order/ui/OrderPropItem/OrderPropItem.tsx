import { FC } from 'react';
import { View, Text, Image } from 'react-native';
import Card from '@src/shared/ui/Card/Card';
import { styles } from './styles';
import { API_MAIN_IMAGE_URL } from '@env';
import { getLocaleDateStringFromIso } from '../../model/lib/getLocaleDateStringFromIso';

type OrderPropItemProps = {
  title: string;
  image: string;
  quantity: number;
  discount: number;
  expDate: string;
};

const OrderPropItem: FC<OrderPropItemProps> = props => {
  const { title, image, quantity, discount, expDate } = props;

  return (
    <Card width={'100%'} cardStyles={[styles.item]}>
      <View style={styles.imageBlock}>
        <Image
          source={{ uri: `${API_MAIN_IMAGE_URL}/${image}` }}
          style={styles.image}
        />
        <View style={styles.imageDiscountBlock}>
          <Text style={styles.imageDiscount}>-{discount}%</Text>
        </View>
      </View>
      <View style={styles.infoBLock}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>

        <View style={styles.footer}>
          <View style={styles.footerBlock}>
            <Text style={styles.subtitle}>
              EXP: {getLocaleDateStringFromIso(expDate)}
            </Text>
          </View>
          <Text style={styles.subtitle}>{quantity} left</Text>
        </View>
      </View>
    </Card>
  );
};

export default OrderPropItem;
