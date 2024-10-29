import { FC } from 'react';
import { View, StyleProp, ViewStyle, Text } from 'react-native';
import Input from '@src/shared/ui/Input/Input';
import CustomButton from '@src/shared/ui/CustomButton/CustomButton';
import { Controller, useForm } from 'react-hook-form';
import { styles } from './styles';
import { emailPattern } from '../../model/constants/emailPattern';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import { fetchLogin } from '../../api/services/fetchLogin';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import { useAppNavigation } from '@src/shared/hooks/useAppNavigation';
import { RouteName } from '@src/app/providers/router/model/constants/RouteName';

type LoginFormProps = {
  style?: StyleProp<ViewStyle>;
};

const LoginForm: FC<LoginFormProps> = props => {
  const { style } = props;
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const error = useAppSelector(state => state.auth.error);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await dispatch(fetchLogin(data)).unwrap();

      navigation.navigate(RouteName.Menu);
    } catch (e) {
      console.log('Error');
    }
  };

  return (
    <View style={[style]}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Email is required field' },
              pattern: { value: emailPattern, message: 'This is not email' },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Email"
                placeholder="Your email"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                errorText={errors.email?.message}
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Password is required field' },
              minLength: {
                value: 6,
                message: 'Password should contain at least 6 symbols',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Password"
                placeholder="Your password"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                secureTextEntry
                errorText={errors.password?.message}
              />
            )}
            name="password"
          />
        </View>
        <CustomButton
          isLoading={isLoading}
          isDisabled={isLoading}
          style={styles.button}
          title="Login"
          onPress={handleSubmit(onSubmit)}
        />

        {error && (
          <View style={styles.errorBlock}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default LoginForm;
