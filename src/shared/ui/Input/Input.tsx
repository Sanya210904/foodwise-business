import { FC } from 'react';
import { View, Text, TextInput, DimensionValue } from 'react-native';
import { styles } from './styles';
import { colors } from '../../../app/styles/colors';

type InputProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  secureTextEntry?: boolean;
  placeholder?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  errorText?: string | null;
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
    secureTextEntry = false,
    errorText,
  } = props;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        onChangeText={text => onChange(text)}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        style={[
          styles.input,
          errorText ? styles.errorInput : null,
          { width, height },
        ]}
      />
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default Input;
