import { colors } from '@src/app/styles/colors';
import { fonts } from '@src/app/styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    lineHeight: 22,
    paddingLeft: 8,
    paddingBottom: 8,
    fontFamily: fonts[600],
  },
  imagePicker: {
    borderRadius: 14,
    backgroundColor: colors.inputPrimary,
  },
  image: {
    flex: 1,
    borderRadius: 14,
  },
  imagePickerButton: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseAnotherImageButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
  },
  placeholder: {
    fontSize: 16,
    fontFamily: fonts[600],
    color: colors.textSecondary,
  },
  errorText: {
    color: colors.brandDanger,
    fontSize: 14,
    fontFamily: fonts[400],
    marginTop: 8,
    marginLeft: 8,
  },
  errorImagePicker: {
    borderColor: colors.brandDanger,
    borderWidth: 1,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImage: {
    borderRadius: 14,
  },
  logoView: {
    borderRadius: 14,
    backgroundColor: colors.surfaceSecondary,
  },
});
