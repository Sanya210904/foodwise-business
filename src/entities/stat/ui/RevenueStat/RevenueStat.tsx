import React, { FC } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import Card from '@src/shared/ui/Card/Card';
import { styles } from './styles';

type RevenueStatProps = {
  style?: StyleProp<ViewStyle>;
};

const RevenueStat: FC<RevenueStatProps> = ({ style }) => {
  return (
    <Card cardStyles={style} width={'100%'}>
      <View style={styles.container}>
        <View style={styles.statBlock}>
          <Text style={[styles.statTitle, styles.statTitleGreen]}>$1280</Text>
          <Text style={styles.subtitle}>Total income</Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.statBlock}>
          <Text style={styles.statTitle}>$260</Text>
          <Text style={styles.subtitle}>Total income</Text>
        </View>
      </View>
    </Card>
  );
};

export default RevenueStat;
