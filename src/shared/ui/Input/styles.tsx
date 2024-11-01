import { StyleSheet } from 'react-native';
import { colors } from '../../../app/styles/colors';
import { fonts } from '../../../app/styles/fonts';

export const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 16,
    lineHeight: 22,
    paddingLeft: 8,
    paddingBottom: 8,
    fontFamily: fonts[600],
  },
  input: {
    borderRadius: 14,
    backgroundColor: colors.inputPrimary,
    paddingHorizontal: 12,
    color: colors.textSecondary,
    fontFamily: fonts[500],
    fontSize: 20,
    borderWidth: 1,
    borderColor: colors.inputPrimary,
  },
  errorInput: {
    borderColor: colors.brandDanger,
  },
  errorText: {
    color: colors.brandDanger,
    fontSize: 14,
    fontFamily: fonts[400],
    marginTop: 8,
    marginLeft: 8,
  },
});
