import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Input from '@src/shared/ui/Input/Input';
import ProductList from '@src/widgets/product/ui/ProductList/ProductList';
import { useAtom } from 'jotai';
import { isEditAtom } from '@src/app/providers/atoms/editAtom';
import BottomControls from '@src/shared/ui/BottomControls/BottomControls';
import { useAppNavigation } from '@src/shared/hooks/useAppNavigation';
import { RouteName } from '@src/app/providers/router/model/constants/RouteName';
import { offsets } from '@src/app/styles/offsets';
import { styles } from './styles';
import Header from '../Header/Header';

const MenuPage = () => {
  const navigation = useAppNavigation();
  const [isEdit, setEdit] = useAtom(isEditAtom);

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
        <Header />
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
