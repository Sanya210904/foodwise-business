import { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import CustomButton, { ButtonType } from '../CustomButton/CustomButton';
import { styles } from './styles';

type BottomControlsProps = {
  submitButtonTitle: string;
  additionalButtonTitle: string;
  onSubmitButtonPress: () => void;
  onAdditionalButtonPress: () => void;
  isSubmitButtonDisabled?: boolean;
  isSubmitButtonLoading?: boolean;
  isAdditionalButtonDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

const BottomControls: FC<BottomControlsProps> = props => {
  const {
    submitButtonTitle,
    additionalButtonTitle,
    onAdditionalButtonPress,
    onSubmitButtonPress,
    isAdditionalButtonDisabled,
    isSubmitButtonDisabled,
    isSubmitButtonLoading,
    style,
  } = props;

  return (
    <View style={[styles.block, style]}>
      <CustomButton
        style={styles.button}
        onPress={onAdditionalButtonPress}
        title={additionalButtonTitle}
        type={ButtonType.SECONDARY}
        isDisabled={isAdditionalButtonDisabled}
      />

      <CustomButton
        style={styles.button}
        title={submitButtonTitle}
        onPress={onSubmitButtonPress}
        type={ButtonType.PRIMARY}
        isDisabled={isSubmitButtonDisabled}
        isLoading={isSubmitButtonLoading}
      />
    </View>
  );
};

export default BottomControls;
