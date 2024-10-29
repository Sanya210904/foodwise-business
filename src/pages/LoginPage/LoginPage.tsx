import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import { LoginForm } from '../../features/auth';
import GradientText from '../../shared/ui/GradientText/GradientText';
import DismissKeyboard from '../../shared/ui/DismissKeyboard/DismissKeyboard';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import { colors } from '../../app/styles/colors';
import { styles } from './styles';
import { useEffect } from 'react';

const height = Dimensions.get('screen').height;

const LoginPage = () => {
  const headerPosition = useSharedValue(1);

  useEffect(() => {
    headerPosition.value = 0;
  }, []);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      headerPosition.value,
      [0, 1],
      [0, height / 6],
    );

    return {
      transform: [
        {
          translateY: withDelay(
            500,
            withTiming(interpolation, { duration: 800 }),
          ),
        },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(headerPosition.value, [0, 1], [1, 0]);

    return {
      opacity: withDelay(1400, withTiming(interpolation, { duration: 600 })),
    };
  });

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <Animated.View style={[styles.header, headerAnimatedStyle]}>
            <Text style={styles.title}>Welcome to</Text>
            <GradientText
              colors={[colors.brandPrimaryFrom, colors.brandPrimaryTo]}
              style={styles.title}>
              Foodwise
            </GradientText>
          </Animated.View>
          <KeyboardAvoidingView keyboardVerticalOffset={36} behavior="padding">
            <Animated.View style={formAnimatedStyle}>
              <LoginForm />
            </Animated.View>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default LoginPage;
