import { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import ExpirationDateButton from '../ExpirationDateButton/ExpirationDateButton';
import {
  expDateButtons,
  ExpDateValue,
} from '../../model/constants/expDateButtons';
import { styles } from './styles';

type ExpirationDateButtonGroupProps = {
  onChange: (value: ExpDateValue) => void;
  toResetButtons: boolean;
};

const ExpirationDateButtonGroup: FC<ExpirationDateButtonGroupProps> = props => {
  const { onChange, toResetButtons } = props;
  const [activeButton, setActiveButton] = useState<string | null>(null);

  useEffect(() => {
    if (toResetButtons) {
      setActiveButton(null);
    }
  }, [toResetButtons]);

  const onOptionChange = (value: ExpDateValue) => {
    setActiveButton(value);
    onChange(value);
  };

  return (
    <View style={styles.block}>
      {expDateButtons.map(button => (
        <ExpirationDateButton
          key={button.value}
          style={styles.button}
          title={button.label}
          value={button.value}
          isActive={activeButton === button.value}
          onPress={onOptionChange}
        />
      ))}
    </View>
  );
};

export default ExpirationDateButtonGroup;
