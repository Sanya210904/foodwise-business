import { colors } from '@src/app/styles/colors';
import { fonts } from '@src/app/styles/fonts';
import { offsets } from '@src/app/styles/offsets';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loaderBlock: {
    flex: 1,
    backgroundColor: colors.surfacePrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    backgroundColor: colors.surfacePrimary,
  },
  container: {
    flex: 1,
    paddingTop: offsets.containerOffsetTop,
    paddingHorizontal: offsets.containerOffsetHorizontal,
    paddingBottom: offsets.containerOffsetBottom,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts[700],
  },
  statBlock: {
    marginTop: 36,
  },
  statTitle: {
    marginBottom: 24,
  },
});
