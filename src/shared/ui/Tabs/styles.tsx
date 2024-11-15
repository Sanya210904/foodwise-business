import { colors } from '@src/app/styles/colors';
import { fonts } from '@src/app/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  tab: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  tabLabel: {
    fontSize: 14,
    fontFamily: fonts[400],
  },
  selectedLabel: {
    fontFamily: fonts[600],
  },
  tabOverlay: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: 14,
    height: 36,
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: '-50%' }],
  },
});
