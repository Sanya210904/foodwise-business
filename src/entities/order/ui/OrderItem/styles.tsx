import { colors } from '@src/app/styles/colors';
import { fonts } from '@src/app/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: 107,
  },
  imageBlock: {
    position: 'relative',
    height: '100%',
    aspectRatio: 1 / 1,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  imageDiscountBlock: {
    position: 'absolute',
    bottom: 3,
    right: 3,
    backgroundColor: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 3,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageDiscount: {
    fontSize: 18,
    fontFamily: fonts[500],
  },
  infoBLock: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: 12,
  },
  title: {
    fontFamily: fonts[600],
    fontSize: 22,
  },
  footer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  footerBlock: {
    width: '75%',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts[500],
  },
});
