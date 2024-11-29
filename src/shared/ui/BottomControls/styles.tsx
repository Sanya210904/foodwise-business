import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  block: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    columnGap: 16,

    shadowColor: '#A9AAAC',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: -2 },
    elevation: 1,
  },
  button: {
    flex: 1,
  },
});
