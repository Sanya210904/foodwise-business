import React, { FC } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import Card from '@src/shared/ui/Card/Card';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import { styles } from './styles';

type RevenueStatProps = {
  style?: StyleProp<ViewStyle>;
};

const RevenueStat: FC<RevenueStatProps> = ({ style }) => {
  const stats = useAppSelector(state => state.shop.shop.stats);

  return (
    <Card cardStyles={style} width={'100%'}>
      <View style={styles.container}>
        <View style={styles.statBlock}>
          <Text style={[styles.statTitle, styles.statTitleGreen]}>
            ${stats.overall?.$numberDecimal ?? 0}
          </Text>
          <Text style={styles.subtitle}>Total income</Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.statBlock}>
          <Text style={styles.statTitle}>
            ${stats.last_month?.$numberDecimal ?? 0}
          </Text>
          <Text style={styles.subtitle}>This month</Text>
        </View>
      </View>
    </Card>
  );
};

export default RevenueStat;
