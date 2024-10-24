import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import CustomButton, {
  ButtonType,
} from './src/shared/CustomButton/CustomButton';
import Input from './src/shared/Input/Input';

const App = () => {
  return (
    <SafeAreaView>
      {/* <CustomButton
        width={'50%'}
        height={60}
        title="Press me"
        type={ButtonType.PRIMARY}
        onPress={() => undefined}
      />

      <CustomButton
        width={'50%'}
        height={60}
        title="Press me"
        type={ButtonType.SECONDARY}
        onPress={() => undefined}
      />

      <CustomButton
        width={'50%'}
        height={60}
        title="Press me"
        type={ButtonType.GREY}
        onPress={() => undefined}
      />

      <CustomButton
        width={'50%'}
        height={60}
        title="Press me"
        type={ButtonType.CLEAR}
        onPress={() => undefined}
      /> */}

      <Input label="Email" value="Hello" onChange={() => undefined} />
    </SafeAreaView>
  );
};

export default App;
