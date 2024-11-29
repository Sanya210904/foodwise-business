import { offsets } from '@src/app/styles/offsets';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listWrapper: {
    height: '100%',
  },
  contentContainer: {
    paddingTop: 16,
    paddingHorizontal: offsets.containerOffsetHorizontal - 7,
  },
  itemSeparator: {
    height: 14,
  },
  list: {},
});
