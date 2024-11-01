import { colors } from '@src/app/styles/colors';
import { fonts } from '@src/app/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBlock: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 18,
    paddingTop: 24,
    paddingBottom: 16,
  },
  statTitle: {
    fontSize: 28,
    fontFamily: fonts[700],
    color: colors.textPrimary,
  },
  statTitleGreen: {
    color: colors.brandSuccess,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fonts[600],
  },
  statDivider: {
    width: 1,
    height: '100%',
    backgroundColor: colors.borderPrimary,
  },
});
