import Card from '@src/shared/ui/Card/Card';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import ClockIcon from '@src/shared/assets/icons/clock-icon.svg';
import { useAppNavigation } from '@src/shared/hooks/useAppNavigation';
import { RouteName } from '@src/app/providers/router/model/constants/RouteName';
import { API_MAIN_IMAGE_URL } from '@env';

const ShopCard = () => {
  const navigation = useAppNavigation();
  const shop = useAppSelector(state => state.shop.shop);

  const handleEditProfileButton = () => {
    navigation.navigate(RouteName.EDIT_SHOP);
  };

  return (
    <Card width={'100%'}>
      <Image
        style={styles.banner}
        source={{ uri: `${API_MAIN_IMAGE_URL}/${shop.banner}` }}
      />
      <View style={styles.cardInfo}>
        <View style={styles.cardInfoBlock}>
          <Image
            source={{ uri: `${API_MAIN_IMAGE_URL}/${shop.logo}` }}
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
          onPress={handleEditProfileButton}
          type={ButtonType.LINK}
          textStyle={styles.buttonText}
        />
      </View>
    </Card>
  );
};

export default ShopCard;
