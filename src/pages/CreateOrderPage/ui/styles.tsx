import { colors } from '@src/app/styles/colors';
import { offsets } from '@src/app/styles/offsets';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.surfacePrimary,
    flex: 1,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    paddingTop: offsets.containerOffsetTop,
    paddingHorizontal: offsets.containerOffsetHorizontal,
    paddingBottom: offsets.containerOffsetBottom,
    flex: 1,
  },
  infoBlock: {
    marginBottom: 24,
  },
  formWrapper: {
    flex: 1,
  },
});
