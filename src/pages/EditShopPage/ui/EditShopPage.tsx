import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EditShopForm } from '@src/features/shop/editShop';
import { styles } from './styles';

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
