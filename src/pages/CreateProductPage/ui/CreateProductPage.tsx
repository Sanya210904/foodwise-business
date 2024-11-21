import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { ProductCreateForm } from '@src/features/createProduct';
import { styles } from './styles';

const CreateProductPage = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={8}
        style={styles.keyboardAvoiding}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>Add new product</Text>
            <ProductCreateForm style={styles.form} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateProductPage;
