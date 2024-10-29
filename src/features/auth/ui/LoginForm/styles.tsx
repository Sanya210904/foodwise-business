import { colors } from '@src/app/styles/colors';
import { fonts } from '@src/app/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  form: {},
  inputContainer: {
    flexDirection: 'column',
    rowGap: 18,
  },
  button: {
    marginTop: 36,
  },
  errorBlock: {
    marginTop: 12,
  },
  errorText: {
    textAlign: 'center',
    fontFamily: fonts[500],
    fontSize: 16,
    color: colors.brandDanger,
  },
});
