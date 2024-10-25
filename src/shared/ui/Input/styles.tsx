import { StyleSheet } from 'react-native';
import { colors } from '../../../app/styles/colors';

export const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 16,
    lineHeight: 22,
    paddingLeft: 8,
    paddingBottom: 8,
  },
  input: {
    borderRadius: 14,
    backgroundColor: colors.inputPrimary,
    paddingHorizontal: 12,
    color: colors.textSecondary,
  },
});
