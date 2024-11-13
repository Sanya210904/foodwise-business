import { StyleSheet } from 'react-native';
import { offsets } from '../../../app/styles/offsets';
import { colors } from '../../../app/styles/colors';
import { fonts } from '../../../app/styles/fonts';

export const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.surfacePrimary,
  },
  container: {
    paddingHorizontal: offsets.containerOffsetHorizontal,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontFamily: fonts[700],
    fontSize: 40,
    lineHeight: 44,
  },
});
