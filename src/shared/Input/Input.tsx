import { FC } from 'react';
import { View, Text, TextInput, DimensionValue } from 'react-native';
import { styles } from './styles';
import { colors } from '../../app/styles/colors';

type InputProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  width?: DimensionValue;
  height?: DimensionValue;
};

const Input: FC<InputProps> = props => {
  const {
    label,
    value,
    onChange,
    width = '100%',
    height = 42,
    placeholder = '',
  } = props;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholder=""
        placeholderTextColor={colors.textSecondary}
        onChangeText={text => onChange(text)}
        value={value}
        style={[styles.input, { width, height }]}
      />
    </View>
  );
};

export default Input;
