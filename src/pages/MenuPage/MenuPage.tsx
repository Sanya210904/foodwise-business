import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import Input from '@src/shared/ui/Input/Input';
import { ProductList } from '@src/entities/product';
import { useAtom } from 'jotai';
import { isEditAtom } from '@src/app/providers/atoms/editAtom';
import BottomControls from '@src/shared/ui/BottomControls/BottomControls';
import { useAppNavigation } from '@src/shared/hooks/useAppNavigation';
import { RouteName } from '@src/app/providers/router/model/constants/RouteName';
import { offsets } from '@src/app/styles/offsets';

const MenuPage = () => {
  const navigation = useAppNavigation();
  const [isEdit, setEdit] = useAtom(isEditAtom);

  const handleEditButtonClick = () => {
    setEdit(true);
  };

  const handleDoneButtonClick = () => {
    setEdit(false);
  };

  const handleAddProductButtonClick = () => {
    navigation.navigate(RouteName.CREATE_PRODUCT);
    setTimeout(() => {
      setEdit(false);
    }, 500);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Menu</Text>
          <CustomButton
            onPress={handleEditButtonClick}
            title="Edit"
            width={55}
            height={43}
            type={ButtonType.LINK}
          />
        </View>

        <Input
          style={styles.input}
          placeholder="Search"
          value=""
          onChange={() => undefined}
        />
      </View>

      <View style={styles.listWrapper}>
        <ProductList />
      </View>

      {isEdit && (
        <BottomControls
          additionalButtonTitle="Add new"
          submitButtonTitle="Done"
          onAdditionalButtonPress={handleAddProductButtonClick}
          onSubmitButtonPress={handleDoneButtonClick}
          style={{ paddingHorizontal: offsets.containerOffsetHorizontal }}
        />
      )}
    </SafeAreaView>
  );
};

export default MenuPage;
