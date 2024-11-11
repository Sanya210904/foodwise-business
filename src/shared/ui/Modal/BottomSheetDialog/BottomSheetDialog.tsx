import React, { FC } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import CustomButton, { ButtonType } from '../../CustomButton/CustomButton';
import { styles } from './styles';

type BottomSheetDialogProps = {
  title: string;
  isOpen: boolean;
  onSubmitButtonPress: () => void;
  onClose: () => void;
  submitButtonTitle: string;
  cancelButtonTitle: string;
};

const BottomSheetDialog: FC<BottomSheetDialogProps> = props => {
  const {
    isOpen,
    title,
    onSubmitButtonPress,
    onClose,
    submitButtonTitle,
    cancelButtonTitle,
  } = props;

  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      useNativeDriver
      hideModalContentWhileAnimating
      backdropTransitionOutTiming={0}
      style={{ flex: 1 }}
      statusBarTranslucent
      onBackdropPress={onClose}
      isVisible={isOpen}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.footer}>
            <CustomButton
              title={cancelButtonTitle}
              onPress={onClose}
              type={ButtonType.SECONDARY}
              style={styles.button}
            />

            <CustomButton
              title={submitButtonTitle}
              onPress={onSubmitButtonPress}
              type={ButtonType.PRIMARY}
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheetDialog;