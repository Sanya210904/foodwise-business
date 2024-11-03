import { colors } from '@src/app/styles/colors';
import { fonts } from '@src/app/styles/fonts';
import { offsets } from '@src/app/styles/offsets';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.surfacePrimary,
  },
  container: {
    flex: 1,
    paddingHorizontal: offsets.containerOffsetHorizontal,
    paddingTop: offsets.containerOffsetTop,
    paddingBottom: offsets.containerOffsetBottom,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts[700],
    textAlign: 'center',
  },
});
