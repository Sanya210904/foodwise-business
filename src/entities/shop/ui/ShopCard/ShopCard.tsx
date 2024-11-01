import Card from '@src/shared/ui/Card/Card';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import ClockIcon from '@src/shared/assets/icons/clock-icon.svg';

const ShopCard = () => {
  const shop = useAppSelector(state => state.shop.shop);

  return (
    <Card width={'100%'}>
      <Image
        style={styles.banner}
        source={require('../../../../shared/assets/images/banner.jpg')}
      />
      <View style={styles.cardInfo}>
        <View style={styles.cardInfoBlock}>
          <Image
            source={require('../../../../shared/assets/images/logo.jpg')}
            style={styles.logo}
          />
          <View>
            <Text style={styles.title}>{shop.name}</Text>
            <View style={styles.timeBlock}>
              <ClockIcon style={styles.timeIcon} />
              <Text style={styles.timeText}>
                {shop?.work_hours?.[0]} - {shop?.work_hours?.[1]}
              </Text>
            </View>
          </View>
        </View>

        <CustomButton
          width={87}
          height={31}
          title="Edit profile"
          onPress={() => undefined}
          type={ButtonType.LINK}
          textStyle={styles.buttonText}
        />
      </View>
    </Card>
  );
};

export default ShopCard;
