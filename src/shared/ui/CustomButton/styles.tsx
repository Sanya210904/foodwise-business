import { StyleSheet } from 'react-native';
import { colors } from '../../../app/styles/colors';
import { fonts } from '../../../app/styles/fonts';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 21,
  },

  primary: {
    borderRadius: 21,
  },
  secondary: {
    backgroundColor: colors.buttonSecondary,
  },
  grey: {
    backgroundColor: colors.buttonSecondary,
  },
  white: {
    backgroundColor: colors.buttonWhite,
  },
  clear: {
    backgroundColor: 'none',
  },
  disabled: {
    // backgroundColor: 'red',
    backgroundColor: colors.buttonDisabled,
  },

  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 16,
  },

  text: {
    fontSize: 20,
    lineHeight: 22,
    color: colors.textInverted,
    fontFamily: fonts[600],
  },
  greyButtonText: {
    color: colors.textPrimary,
    fontFamily: fonts[600],
  },
});
