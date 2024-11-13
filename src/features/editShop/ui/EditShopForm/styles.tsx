import { colors } from '@src/app/styles/colors';
import { fonts } from '@src/app/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  keyboardAvoiding: {},
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  form: {
    flexDirection: 'column',
    rowGap: 18,
  },
  errorText: {
    marginTop: 12,
    textAlign: 'center',
    fontFamily: fonts[500],
    fontSize: 16,
    color: colors.brandDanger,
  },
});
