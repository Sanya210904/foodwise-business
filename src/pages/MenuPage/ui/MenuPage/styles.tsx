import { colors } from '@src/app/styles/colors';
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
  input: {
    marginTop: 16,
  },
  listWrapper: {
    flex: 1,
  },
});
