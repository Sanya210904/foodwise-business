import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EditShopForm } from '@src/features/editShop';

const EditShopPage = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>
        <EditShopForm />
      </View>
    </SafeAreaView>
  );
};

export default EditShopPage;
