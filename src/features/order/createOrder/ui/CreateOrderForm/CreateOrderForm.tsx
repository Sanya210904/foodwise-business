import { KeyboardAvoidingView, View } from 'react-native';
import React, { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Input from '@src/shared/ui/Input/Input';
import BottomControls from '@src/shared/ui/BottomControls/BottomControls';
import { useAppNavigation } from '@src/shared/hooks/useAppNavigation';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import {
  setDiscount,
  setDiscountPrice,
  setExpDate,
  setQuantity,
} from '../../api/slices/orderCreateSlice';
import { getDiscountPrice } from '../../model/lib/getDiscountPrice';
import { styles } from './styles';
import ExpirationDateButtonGroup from '../ExpirationDateButtonGroup/ExpirationDateButtonGroup';
import { expDateLabelToDate } from '../../model/constants/expDateLabelToDate';
import { ExpDateValue } from '../../model/constants/ExpDateValue';
import { getReadableDateWithAddedDays } from '../../model/lib/getReadableDateWithAddedDays';
import { OrderCreateFields } from '../../model/types/Order';
import { getIsoDateWithAddedDays } from '../../model/lib/getIsoDateWithAddedDays';
import { getIsoDateFromLocaleString } from '../../model/lib/getIsoDateFromLocaleString';
import { fetchCreateOrder } from '../../api/services/fetchCreateOrder';
import { FetchCreateOrderRequest } from '../../model/types/FetchCreateOrder';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';

type CreateOrderFormProps = {
  productId: string;
  price: string;
};

const CreateOrderForm: FC<CreateOrderFormProps> = props => {
  const { price, productId } = props;
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      discount: '',
      quantity: '',
      expDate: '',
    },
  });

  const [toResetExpDateButtons, setResetExpDateButtons] =
    useState<boolean>(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleDiscountChange = (discount: string) => {
    dispatch(setDiscount(discount));
    setValue('discount', discount);

    if (discount === '' || Number(discount) <= 0 || Number(discount) > 100) {
      dispatch(setDiscountPrice(null));
    } else {
      const discountPrice = getDiscountPrice(Number(price), Number(discount));
      dispatch(setDiscountPrice(discountPrice.toString()));
    }
  };

  const handleQuantityChange = (quantity: string) => {
    dispatch(setQuantity(quantity));
    setValue('quantity', quantity);
  };

  const handleExpDateChange = (expDate: string) => {
    dispatch(setExpDate(expDate));
    setValue('expDate', expDate);
  };

  const handleExpDateButtonChange = (expValue: ExpDateValue) => {
    const daysToAdd = expDateLabelToDate[expValue];

    const expDate = getReadableDateWithAddedDays(daysToAdd);
    setValue('expDate', expDate);
  };

  const onSubmit = async (data: OrderCreateFields) => {
    setResetExpDateButtons(false);
    const isoDate = getIsoDateFromLocaleString(data.expDate);

    const dataToSend = {
      product_id: productId,
      expiration_date: isoDate,
      quantity: Number(data.quantity),
      discount: Number(data.discount),
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
          rules={{
            required: { value: true, message: 'Discount is required field' },
          }}
          render={({ field: { onBlur, value } }) => (
            <Input
              label="Size of discount (%):"
              placeholder="Enter discount"
              onBlur={onBlur}
              onChange={value => handleDiscountChange(value)}
              value={value}
              errorText={errors.discount?.message}
            />
          )}
        />

        <Controller
          name="quantity"
          control={control}
          rules={{
            required: { value: true, message: 'Amount is required field' },
          }}
          render={({ field: { onBlur, value } }) => (
            <Input
              label="Amount (units):"
              placeholder="Enter amount"
              onBlur={onBlur}
              onChange={value => handleQuantityChange(value)}
              value={value}
              errorText={errors.quantity?.message}
            />
          )}
        />

        <View style={styles.expDateInputBlock}>
          <Controller
            name="expDate"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Expiration date is required field',
              },
            }}
            render={({ field: { onBlur, value } }) => (
              <Input
                label="Expiration date:"
                placeholder="DD / MM / YY"
                onBlur={onBlur}
                onChange={value => handleExpDateChange(value)}
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
      />
    </View>
  );
};

export default CreateOrderForm;
