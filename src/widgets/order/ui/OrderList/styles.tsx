import { offsets } from '@src/app/styles/offsets';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loaderBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  list: {
    paddingHorizontal: offsets.containerOffsetHorizontal,
    paddingBottom: offsets.containerOffsetBottom,
  },
  separator: {
    height: 16,
  },
});
