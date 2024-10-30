import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  emptyNavigation: {
    display: 'none',
  },
  navigation: {
    zIndex: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    paddingHorizontal: 31,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flex: 1,
    shadowColor: '#A9AAAC',
    shadowOpacity: 0.25,
    shadowRadius: 21,
    shadowOffset: { width: 0, height: -2 },
    elevation: 1,
  },
});
