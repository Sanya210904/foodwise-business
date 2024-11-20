import { colors } from '@src/app/styles/colors';
import { fonts } from '@src/app/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageBlock: {
    position: 'relative',
    width: '100%',
    aspectRatio: 4 / 3,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 14,
  },
  priceBlock: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    borderRadius: 9,
    backgroundColor: colors.surfacePrimary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 12,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  discountPriceText: {
    fontSize: 16,
    fontFamily: fonts[500],
    color: colors.textSecondary,
    textDecorationLine: 'line-through',
    textDecorationColor: colors.textSecondary,
  },
  priceText: {
    fontFamily: fonts[600],
    fontSize: 20,
  },
  title: {
    marginTop: 24,
    fontFamily: fonts[700],
    fontSize: 24,
    textAlign: 'center',
    color: colors.textPrimary,
  },
});
