import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  block: {
    flex: 1,
    height: 190,
    borderRadius: 14,
    zIndex: 3,
    marginHorizontal: 7,

    shadowColor: '#D0D3D8',
    shadowOpacity: 0.9,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 1 },
    elevation: 16,
    backgroundColor: '#fff',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 9,
    width: 29,
    height: 29,
    zIndex: 4,
    borderRadius: 14.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  closeButtonText: {
    zIndex: 5,
    color: '#fff',
  },
  image: {
    width: '100%',
    height: 104,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  info: {
    paddingLeft: 12,
    paddingVertical: 10,
    height: 86,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    justifyContent: 'space-between',
  },
  infoTitle: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'gilroy-semibold',
  },
  infoPrice: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'gilroy-medium',
  },
});
