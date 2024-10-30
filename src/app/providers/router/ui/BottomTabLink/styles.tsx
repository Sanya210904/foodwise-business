import { colors } from '@src/app/styles/colors';
import { fonts } from '@src/app/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  activeLightButton: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 12,
    height: 60,
    borderWidth: 4,
    borderRadius: 21,
    borderColor: colors.brandPrimaryFrom,
  },
  inActiveButton: {
    width: '20%',
    height: 60,
  },
  iconBlock: {
    width: 40,
    paddingLeft: 16,
  },
  textBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'right',
    paddingRight: 14,
  },
  buttonLightText: {
    fontSize: 18,
    fontFamily: fonts[600],
    alignSelf: 'center',
    color: colors.textPrimary,
  },
});
