import { fonts } from '@src/app/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 143,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 12,
  },
  cardInfoBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 14,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 11,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts[600],
    marginBottom: 6,
  },
  timeBlock: {
    flexDirection: 'row',
    columnGap: 4,
    alignItems: 'center',
  },
  timeIcon: {
    width: 16,
    height: 16,
    transform: [{ translateY: -1 }],
  },
  timeText: {
    fontSize: 16,
    fontFamily: fonts[600],
  },
  buttonText: {
    fontSize: 16,
  },
});
