import { FC } from 'react';
import { View } from 'react-native';
import CustomButton, { ButtonType } from '../CustomButton/CustomButton';
import { styles } from './styles';

type BottomControlsProps = {
  submitButtonTitle: string;
  additionalButtonTitle: string;
  onSubmitButtonPress: () => void;
  onAdditionalButtonPress: () => void;
};

const BottomControls: FC<BottomControlsProps> = props => {
  const {
    submitButtonTitle,
    additionalButtonTitle,
    onAdditionalButtonPress,
    onSubmitButtonPress,
  } = props;

  return (
    <View style={styles.block}>
      <CustomButton
        style={styles.button}
        onPress={onAdditionalButtonPress}
        title={additionalButtonTitle}
        type={ButtonType.SECONDARY}
      />

      <CustomButton
        style={styles.button}
        title={submitButtonTitle}
        onPress={onSubmitButtonPress}
        type={ButtonType.PRIMARY}
      />
    </View>
  );
};

export default BottomControls;
