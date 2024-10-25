import { FC, ReactNode } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

type DismissKeyboardProps = {
  children: ReactNode;
};

const DismissKeyboard: FC<DismissKeyboardProps> = props => {
  const { children } = props;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
