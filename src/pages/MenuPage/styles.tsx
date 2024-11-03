import { colors } from '@src/app/styles/colors';
import { fonts } from '@src/app/styles/fonts';
import { offsets } from '@src/app/styles/offsets';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.surfacePrimary,
    flex: 1,
  },
  container: {
    paddingTop: offsets.containerOffsetTop,
    paddingHorizontal: offsets.containerOffsetHorizontal,
    paddingBottom: offsets.containerOffsetBottom,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: fonts[700],
  },
  input: {
    marginTop: 16,
  },
  listWrapper: {
    flex: 1,
  },
});
