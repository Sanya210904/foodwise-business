import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Text } from 'react-native';

const EditShopForm = () => {
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      price: '',
      image: '',
    },
  });
  
  return (
    <View>
      <Text>EditShopForm</Text>
    </View>
  );
};

export default EditShopForm;
