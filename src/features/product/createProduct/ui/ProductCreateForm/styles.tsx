import { colors } from '@src/app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  form: {
    flexDirection: 'column',
    rowGap: 18,
  },
  errorText: {
    fontSize: 16,
    color: colors.brandDanger,
    textAlign: 'center',
  },

  buttonBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 16,
  },
  button: {
    flex: 1,
  },
});
