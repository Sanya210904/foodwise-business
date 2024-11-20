import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  DimensionValue,
  ActivityIndicator,
  TextStyle,
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
  LINK = 'link',
  CLEAR = 'clear',
}

type CustomButtonProps = {
  title: string;
  icon?: string;
  onPress: () => void;
  type?: ButtonType;
  isDisabled?: boolean;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
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
    isLoading = false,
    style,
    textStyle,
    width = '100%',
    height = 60,
  } = props;

  const getButtonStyles = useMemo(() => {
    if (isLoading || isDisabled) return styles.disabled;
    if (type === ButtonType.PRIMARY) return styles.primary;
    if (type === ButtonType.SECONDARY) return styles.secondary;
    if (type === ButtonType.GREY) return styles.grey;
    if (type === ButtonType.WHITE) return styles.white;
    if (type === ButtonType.CLEAR) return styles.clear;
    if (type === ButtonType.LINK) return styles.link;
  }, [type, isDisabled]);

  const getButtonTextStyles = useMemo(() => {
    if (type === ButtonType.GREY || type === ButtonType.WHITE)
      return styles.greyButtonText;
    if (type === ButtonType.LINK) return styles.linkButtonText;
    else return styles.text;
  }, []);

  const buttonContent = (
    <TouchableOpacity
      style={[getButtonStyles, styles.button, { width, height }, style]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isDisabled || isLoading}>
      {type === ButtonType.PRIMARY && !isDisabled && !isLoading ? (
        <LinearGradient
          style={[styles.primary, styles.container, style]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[colors.buttonPrimaryFrom, colors.buttonPrimaryTo]}>
          {isLoading ? (
            <ActivityIndicator color={'#fff'} />
          ) : (
            <Text style={[getButtonTextStyles, textStyle]}>{title}</Text>
          )}
        </LinearGradient>
      ) : (
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator color={'#fff'} />
          ) : (
            <Text style={[getButtonTextStyles, textStyle]}>{title}</Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );

  return buttonContent;
};

export default CustomButton;
