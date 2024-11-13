import { fonts } from '@src/app/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 43,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts[700],
  },
  centerTitle: {
    textAlign: 'center',
    flex: 1,
  },
});
