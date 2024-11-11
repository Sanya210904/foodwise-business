import React, { FC } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  DimensionValue,
  Image,
} from 'react-native';
import { styles } from './styles';
import CustomButton, { ButtonType } from '../CustomButton/CustomButton';
import { launchImageLibrary } from 'react-native-image-picker';

type ImagePickerProps = {
  label?: string;
  image: string | null;
  placeholder?: string;
  onImagePickerPress: (imageUri: string) => void;
  width: DimensionValue;
  height: DimensionValue;
  errorText?: string;
  variant?: 'banner' | 'logo';
};

const ImagePicker: FC<ImagePickerProps> = props => {
  const {
    image,
    label,
    placeholder,
    onImagePickerPress,
    width,
    height,
    errorText,
    variant = 'banner',
  } = props;

  const handleImagePick = async () => {
    await launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.assets && response.assets.length > 0) {
        const chosenImage = response.assets[0].uri;

        if (chosenImage) onImagePickerPress(chosenImage);
      }
    });
  };

  if (variant === 'banner') {
    return (
      <View>
        {label && <Text style={styles.label}>{label}</Text>}
        <View
          style={[
            styles.imagePicker,
            errorText && styles.errorImagePicker,
            { width, height },
          ]}>
          {image ? (
            <>
              <Image style={styles.image} source={{ uri: image }} />
              <CustomButton
                style={styles.chooseAnotherImageButton}
                onPress={handleImagePick}
                title="Choose other"
                type={ButtonType.WHITE}
                width={126}
                height={34}
              />
            </>
          ) : (
            <TouchableOpacity
              style={styles.imagePickerButton}
              onPress={handleImagePick}>
              {placeholder && (
                <Text style={styles.placeholder}>{placeholder}</Text>
              )}
            </TouchableOpacity>
          )}
        </View>
        {errorText && <Text style={styles.errorText}>{errorText}</Text>}
      </View>
    );
  }

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.row}>
        {image ? (
          <Image
            style={[
              styles.logoImage,
              { width, height },
              errorText && styles.errorImagePicker,
            ]}
            source={{ uri: image }}
          />
        ) : (
          <View
            style={[
              styles.logoView,
              { width, height },
              errorText && styles.errorImagePicker,
            ]}
          />
        )}

        <CustomButton
          width={126}
          height={34}
          type={ButtonType.GREY}
          title="Choose other"
          onPress={handleImagePick}
        />
      </View>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default ImagePicker;
