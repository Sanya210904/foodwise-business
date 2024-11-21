import { FC, useMemo } from 'react';
import {
  Text,
  TouchableOpacity,
  Dimensions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Card from '../Card/Card';
import { Option } from '@src/shared/types/Option';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { styles } from './styles';
import { offsets } from '@src/app/styles/offsets';

type TabsProps = {
  onChange: (value: string) => void;
  tabs: Option[];
  value: string;
  style?: StyleProp<ViewStyle>;
};

const tabBlockOffsetHorizontal = 4;
const screenWidth = Dimensions.get('screen').width;
const tabBlockWidth = screenWidth - offsets.containerOffsetHorizontal * 2;
const tabBlockInnerWidth = tabBlockWidth - tabBlockOffsetHorizontal * 2;

const Tabs: FC<TabsProps> = props => {
  const { tabs, value, onChange, style } = props;
  const tabLeftPosition = useSharedValue(tabBlockOffsetHorizontal);

  const tabOverlayWidth = useMemo(
    () => tabBlockInnerWidth / tabs.length,
    [tabs.length],
  );

  const onTabChange = (value: string, index: number) => {
    const tabLeftShift = tabOverlayWidth * index + tabBlockOffsetHorizontal;
    tabLeftPosition.value = withTiming(tabLeftShift, { duration: 300 });
    onChange(value);
  };

  return (
    <Card
      cardStyles={[
        styles.tabBlock,
        { paddingHorizontal: tabBlockOffsetHorizontal },
        style,
      ]}
      width={'100%'}
      height={48}>
      <Animated.View
        style={[
          styles.tabOverlay,
          { width: tabOverlayWidth, left: tabLeftPosition },
        ]}
      />
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={tab.value}
          style={styles.tab}
          onPress={() => onTabChange(tab.value, index)}>
          <Text
            style={[
              styles.tabLabel,
              value === tab.value && styles.selectedLabel,
            ]}
            numberOfLines={1}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </Card>
  );
};

export default Tabs;
