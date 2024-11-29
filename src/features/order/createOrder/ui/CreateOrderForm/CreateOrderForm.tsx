import { View } from 'react-native';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Input, { InputType } from '@src/shared/ui/Input/Input';
import BottomControls from '@src/shared/ui/BottomControls/BottomControls';
import { useAppNavigation } from '@src/shared/hooks/useAppNavigation';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import {
  setDiscount,
  setDiscountPrice,
} from '../../api/slices/orderCreateSlice';
import { getDiscountPrice } from '../../model/lib/getDiscountPrice';
import ExpirationDateButtonGroup from '../ExpirationDateButtonGroup/ExpirationDateButtonGroup';
import {
  expDateLabelToDate,
  ExpDateValue,
} from '../../model/constants/expDateButtons';
import { getReadableDateWithAddedDays } from '../../model/lib/getReadableDateWithAddedDays';
import { getIsoDateFromLocaleString } from '../../model/lib/getIsoDateFromLocaleString';
import { fetchCreateOrder } from '../../api/services/fetchCreateOrder';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateOrderFormData,
  CreateOrderSchema,
} from '../../model/types/OrderFormSchema';
import { styles } from './styles';

type CreateOrderFormProps = {
  productId: string;
  price: string;
};

const CreateOrderForm: FC<CreateOrderFormProps> = props => {
  const { price, productId } = props;
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.orderCreate.isLoading);
  const navigation = useAppNavigation();
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<CreateOrderFormData>({
    resolver: zodResolver(CreateOrderSchema),
    mode: 'onChange',
  });

  const [toResetExpDateButtons, setResetExpDateButtons] =
    useState<boolean>(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleDiscountChange = (discount: number) => {
    dispatch(setDiscount(discount));
    setValue('discount', discount);

    if (!isFinite(discount) || discount <= 0 || discount > 100) {
      dispatch(setDiscountPrice(null));
    } else {
      const discountPrice = getDiscountPrice(Number(price), Number(discount));
      dispatch(setDiscountPrice(discountPrice.toString()));
    }
  };

  const handleExpDateButtonChange = (expValue: ExpDateValue) => {
    const daysToAdd = expDateLabelToDate[expValue];

    const expDate = getReadableDateWithAddedDays(daysToAdd);
    setValue('expDate', expDate, { shouldValidate: true });
  };

  const onSubmit = async (data: CreateOrderFormData) => {
    setResetExpDateButtons(false);
    const isoDate = getIsoDateFromLocaleString(data.expDate);

    const dataToSend = {
      product_id: productId,
      expiration_date: isoDate,
      quantity: data.quantity as number,
      discount: data.discount as number,
    };

    try {
      await dispatch(fetchCreateOrder(dataToSend));

      dispatch(setDiscountPrice(null));
      reset();
      setResetExpDateButtons(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.form}>
        <Controller
          name="discount"
          control={control}
          render={({ field: { onBlur, value } }) => (
            <Input
              label="Size of discount (%):"
              placeholder="Enter discount"
              onBlur={onBlur}
              onChange={value => handleDiscountChange(Number(value))}
              value={value || ''}
              type={InputType.NUMBER}
              errorText={errors.discount?.message}
            />
          )}
        />

        <Controller
          name="quantity"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              label="Amount (units):"
              placeholder="Enter amount"
              onBlur={onBlur}
              onChange={value => onChange(Number(value))}
              value={value || ''}
              type={InputType.NUMBER}
              errorText={errors.quantity?.message}
            />
          )}
        />

        <View style={styles.expDateInputBlock}>
          <Controller
            name="expDate"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <Input
                label="Expiration date:"
                placeholder="DD / MM / YY"
                onBlur={onBlur}
                onChange={value => onChange(value)}
                value={value}
                errorText={errors.expDate?.message}
              />
            )}
          />

          <ExpirationDateButtonGroup
            onChange={handleExpDateButtonChange}
            toResetButtons={toResetExpDateButtons}
          />
        </View>
      </View>

      <BottomControls
        submitButtonTitle="Enter"
        additionalButtonTitle="Cancel"
        onSubmitButtonPress={handleSubmit(onSubmit)}
        onAdditionalButtonPress={handleGoBack}
        isAdditionalButtonDisabled={isLoading}
        isSubmitButtonLoading={isLoading}
        isSubmitButtonDisabled={isLoading}
      />
    </View>
  );
};

export default CreateOrderForm;
