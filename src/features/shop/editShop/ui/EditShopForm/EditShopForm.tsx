import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import ImagePicker from '@src/shared/ui/ImagePicker/ImagePicker';
import Input from '@src/shared/ui/Input/Input';
import { Controller, useForm } from 'react-hook-form';
import { View, ScrollView, KeyboardAvoidingView, Text } from 'react-native';
import BottomControls from '@src/shared/ui/BottomControls/BottomControls';
import { useAppNavigation } from '@src/shared/hooks/useAppNavigation';
import { EditShopFields } from '../../model/types/EditShopFields';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import { fetchEditShop } from '../../api/services/fetchEditShop';
import { API_MAIN_IMAGE_URL } from '@env';
import { styles } from './styles';

const EditShopForm = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const shop = useAppSelector(state => state.shop.shop);
  const isLoading = useAppSelector(state => state.shop.isLoading);
  const error = useAppSelector(state => state.shop.error);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      banner: `${API_MAIN_IMAGE_URL}/${shop.banner}`,
      logo: `${API_MAIN_IMAGE_URL}/${shop.logo}`,
      name: shop.name,
      address: shop.location.address,
      info: shop.description,
    },
  });

  const isFormChanged = (data: EditShopFields) => {
    const bannerId = data.banner && data.banner.split('/').at(-1);
    const logoId = data.logo && data.logo.split('/').at(-1);

    if (bannerId !== shop.banner) return true;
    if (logoId !== shop.logo) return true;
    if (data.name !== shop.name) return true;
    if (data.address !== shop.location.address) return true;
    if (data.info !== shop.description) return true;

    return false;
  };

  const handleCancelButton = () => {
    navigation.goBack();
  };

  const onSubmit = async (data: EditShopFields) => {
    const toSendRequest = isFormChanged(data);

    if (toSendRequest) {
      await dispatch(fetchEditShop(data));
    }

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior="padding"
      keyboardVerticalOffset={0}>
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <Controller
              name="banner"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ImagePicker
                  width="100%"
                  height={243}
                  image={value}
                  onImagePickerPress={onChange}
                  placeholder="Choose photo"
                  label="Photo:"
                  errorText={errors.banner?.message}
                />
              )}
            />

            <Controller
              name="logo"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ImagePicker
                  variant="logo"
                  width={86}
                  height={86}
                  image={value}
                  onImagePickerPress={onChange}
                  placeholder="Choose logo"
                  label="Logo:"
                  errorText={errors.logo?.message}
                />
              )}
            />

            <Controller
              name="name"
              control={control}
              rules={{
                required: { value: true, message: 'Name is required field' },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Name:"
                  placeholder="Enter name"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  errorText={errors.name?.message}
                />
              )}
            />

            <Controller
              name="address"
              control={control}
              rules={{
                required: { value: true, message: 'Address is required field' },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Address:"
                  placeholder="Enter address"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  errorText={errors.address?.message}
                />
              )}
            />

            <Controller
              name="info"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  multiline
                  height={100}
                  label="Sales info:"
                  placeholder="Enter sales info"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  errorText={errors.info?.message}
                />
              )}
            />
          </View>

          {error && <Text style={styles.errorText}>{error}</Text>}
        </ScrollView>

        <BottomControls
          submitButtonTitle="Done"
          additionalButtonTitle="Cancel"
          onAdditionalButtonPress={handleCancelButton}
          onSubmitButtonPress={handleSubmit(onSubmit)}
          isSubmitButtonLoading={isLoading}
          isSubmitButtonDisabled={isLoading}
          isAdditionalButtonDisabled={isLoading}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditShopForm;
