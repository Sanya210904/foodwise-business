import MaskedView from '@react-native-masked-view/masked-view';
import { FC, ReactNode } from 'react';
import { View, Text, StyleProp, TextStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../app/styles/colors';

type GradientTextProps = {
  style?: StyleProp<TextStyle>;
  colors: (string | number)[];
  children: ReactNode;
};

const GradientText: FC<GradientTextProps> = props => {
  const { style, colors, children } = props;
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Text {...props} style={[style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
