import { FC, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  DimensionValue,
  StyleProp,
  TextStyle,
  KeyboardType,
} from 'react-native';
import { styles } from './styles';
import { colors } from '../../../app/styles/colors';

export enum InputType {
  TEXT = 'text',
  NUMBER = 'number',
}

type InputProps = {
  label?: string;
  value: string | number;
  onChange: (value: string | number) => void;
  onBlur?: () => void;
  type?: InputType;
  secureTextEntry?: boolean;
  placeholder?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  errorText?: string | null;
  style?: StyleProp<TextStyle>;
};

const Input: FC<InputProps> = props => {
  const {
    label,
    value,
    onChange,
    width = '100%',
    height = 42,
    placeholder = '',
    onBlur,
    type,
    secureTextEntry = false,
    errorText,
    style,
    ...otherProps
  } = props;

  const keyboardType = useMemo((): KeyboardType => {
    if (type === InputType.TEXT) return 'default';
    if (type === InputType.NUMBER) return 'numeric';

    return 'default';
  }, [type]);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...otherProps}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        onChangeText={text => onChange(text)}
        onBlur={onBlur}
        value={value?.toString()}
        secureTextEntry={secureTextEntry}
        style={[
          styles.input,
          errorText ? styles.errorInput : null,
          { width, height },
          style,
        ]}
        keyboardType={keyboardType}
      />
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default Input;
