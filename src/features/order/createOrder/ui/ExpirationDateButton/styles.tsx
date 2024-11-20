import { colors } from '@src/app/styles/colors';
import { fonts } from '@src/app/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 14,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.textPrimary,
    fontFamily: fonts[600],
  },
  activeButtonText: {
    color: colors.textInverted,
  },
});
