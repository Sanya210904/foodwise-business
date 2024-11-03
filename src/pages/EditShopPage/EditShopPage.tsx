import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditShopPage = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default EditShopPage;
