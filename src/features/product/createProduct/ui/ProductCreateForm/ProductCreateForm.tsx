import { View, StyleProp, ViewStyle, Text } from 'react-native';
import { FC } from 'react';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import { Controller, useForm } from 'react-hook-form';
import Input from '@src/shared/ui/Input/Input';
import ImagePicker from '@src/shared/ui/ImagePicker/ImagePicker';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import { useAppNavigation } from '@src/shared/hooks/useAppNavigation';
import { fetchCreateProduct } from '../../api/services/fetchCreateProduct';
import { CreateProductFields } from '../../model/types/CreateProduct';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import { styles } from './styles';

type ProductCreateFormProps = {
  style?: StyleProp<ViewStyle>;
};

const ProductCreateForm: FC<ProductCreateFormProps> = props => {
  const { style } = props;
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.products.isLoading);
  const serverError = useAppSelector(state => state.products.error);

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

  const handleCancelButton = () => {
    if (!isLoading) {
      navigation.goBack();
    }
  };

  const onFormSubmit = async (data: CreateProductFields) => {
    console.log(data);

    await dispatch(fetchCreateProduct(data));

    resetField('image');
    resetField('title');
    resetField('price');
  };

  console.log(serverError);

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.form}>
        <Controller
          name="image"
          control={control}
          rules={{
            required: { value: true, message: 'Image is required field' },
          }}
          render={({ field: { onChange, value } }) => (
            <ImagePicker
              width="100%"
              height={243}
              image={value}
              onImagePickerPress={onChange}
              placeholder="Choose photo"
              label="Add photo"
              errorText={errors.image?.message}
            />
          )}
        />

        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Name is required field' },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Name"
              placeholder="Enter name"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              errorText={errors.title?.message}
            />
          )}
          name="title"
        />

        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Price is required field' },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Price"
              placeholder="Enter price"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              errorText={errors.price?.message}
            />
          )}
          name="price"
        />

        {serverError && <Text style={styles.errorText}>{serverError}</Text>}
      </View>

      <View style={styles.buttonBlock}>
        <CustomButton
          type={ButtonType.SECONDARY}
          title="Cancel"
          onPress={handleCancelButton}
          style={styles.button}
        />

        <CustomButton
          type={ButtonType.PRIMARY}
          title="Enter"
          onPress={handleSubmit(onFormSubmit)}
          isLoading={isLoading}
          isDisabled={isLoading}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default ProductCreateForm;
