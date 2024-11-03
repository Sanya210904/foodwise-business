import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { ProductCreateForm } from '@src/features/createProduct';

const CreateProductPage = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Add new proposition</Text>
        <ProductCreateForm style={styles.form} />
      </View>
    </SafeAreaView>
  );
};

export default CreateProductPage;
