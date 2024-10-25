import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  DimensionValue,
} from 'react-native';
import React, { FC, useMemo } from 'react';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../app/styles/colors';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  GREY = 'grey',
  WHITE = 'white',
  CLEAR = 'clear',
}

type CustomButtonProps = {
  title: string;
  icon?: string;
  onPress: () => void;
  type?: ButtonType;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  width?: DimensionValue;
  height?: DimensionValue;
};

const CustomButton: FC<CustomButtonProps> = props => {
  const {
    title,
    icon,
    onPress,
    type = ButtonType.PRIMARY,
    isDisabled = false,
    style,
    width = '100%',
    height = 60,
  } = props;

  const getButtonStyles = useMemo(() => {
    if (isDisabled) return styles.disabled;
    if (type === ButtonType.PRIMARY) return styles.primary;
    if (type === ButtonType.SECONDARY) return styles.secondary;
    if (type === ButtonType.GREY) return styles.grey;
    if (type === ButtonType.WHITE) return styles.white;
    if (type === ButtonType.CLEAR) return styles.clear;
  }, [type, isDisabled]);

  const getButtonTextStyles = useMemo(() => {
    if (type === ButtonType.GREY) return styles.greyButtonText;
    else return styles.text;
  }, []);

  const buttonContent = (
    <TouchableOpacity
      style={[getButtonStyles, styles.button, { width, height }, style]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isDisabled}>
      {type === ButtonType.PRIMARY ? (
        <LinearGradient
          style={[styles.primary, styles.container]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[colors.buttonPrimaryFrom, colors.buttonPrimaryTo]}>
          <Text style={getButtonTextStyles}>{title}</Text>
        </LinearGradient>
      ) : (
        <View style={styles.container}>
          <Text style={getButtonTextStyles}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  //   if (type === ButtonType.PRIMARY) {
  //     return (
  //       <LinearGradient
  //         start={{ x: 0, y: 0 }}
  //         end={{ x: 1, y: 0 }}
  //         colors={[colors.buttonPrimaryFrom, colors.buttonPrimaryTo]}>
  //         {buttonContent}
  //       </LinearGradient>
  //     );
  //   }

  return buttonContent;
};

export default CustomButton;
