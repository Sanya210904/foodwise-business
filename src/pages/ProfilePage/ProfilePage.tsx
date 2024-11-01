import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { RevenueStat } from '@src/entities/stat';
import { ShopCard } from '@src/entities/shop';
import { useDispatch } from 'react-redux';
import { fetchShop } from '@src/entities/shop/api/services/fetchShop';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.shop.isLoading);

  useEffect(() => {
    dispatch(fetchShop());
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loaderBlock}>
        <ActivityIndicator size={48} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <CustomButton
            width={91}
            height={43}
            title="Sign out"
            onPress={() => undefined}
            type={ButtonType.LINK}
          />
        </View>

        <ShopCard />

        <View style={styles.statBlock}>
          <Text style={[styles.title, styles.statTitle]}>Income</Text>
          <RevenueStat />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
