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
    marginTop: offsets.containerOffsetTop,
    paddingBottom: offsets.containerOffsetBottom,
    paddingHorizontal: offsets.containerOffsetHorizontal,
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts[700],
    textAlign: 'center',
  },
  form: {
    marginTop: 36,
  },
});
