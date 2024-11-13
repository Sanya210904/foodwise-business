import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { RevenueStat } from '@src/entities/stat';
import { ShopCard } from '@src/entities/shop';
import { fetchShop } from '@src/entities/shop/api/services/fetchShop';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import BottomSheetDialog from '@src/shared/ui/Modal/BottomSheetDialog/BottomSheetDialog';
import { fetchLogout } from '@src/features/auth/api/services/fetchLogout';
import { styles } from './styles';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.shop.isLoading);
  const [isLogoutDialogOpen, setLogoutDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchShop());
  }, []);

  const handleLogout = () => {
    dispatch(fetchLogout());
  };

  if (isLoading) {
    return (
      <View style={styles.loaderBlock}>
        <ActivityIndicator size={48} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <BottomSheetDialog
        isOpen={isLogoutDialogOpen}
        title="Sign out from Smart Bistro?"
        onClose={() => setLogoutDialogOpen(false)}
        onSubmitButtonPress={handleLogout}
        submitButtonTitle="Yes, sign out"
        cancelButtonTitle="Cancel"
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <CustomButton
            width={91}
            height={43}
            title="Sign out"
            onPress={() => setLogoutDialogOpen(true)}
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
