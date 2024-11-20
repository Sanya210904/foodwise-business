import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import CustomButton, {
  ButtonType,
} from '@src/shared/ui/CustomButton/CustomButton';
import { styles } from './styles';
import { ExpDateValue } from '../../model/constants/ExpDateValue';

type ExpirationDateButtonProps = {
  title: string;
  value: ExpDateValue;
  isActive: boolean;
  onPress: (value: ExpDateValue) => void;
  style?: StyleProp<ViewStyle>;
};

const ExpirationDateButton: FC<ExpirationDateButtonProps> = props => {
  const { title, value, isActive, onPress, style } = props;

  return (
    <CustomButton
      style={[styles.button, style]}
      textStyle={[styles.buttonText, isActive && styles.activeButtonText]}
      height={42}
      title={title}
      onPress={() => onPress(value)}
      type={isActive ? ButtonType.PRIMARY : ButtonType.GREY}
    />
  );
};

export default ExpirationDateButton;
