import { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { orderTabs } from '../../model/constants/orderTabs';
import Tabs from '@src/shared/ui/Tabs/Tabs';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import { ORDER_CATEGORIES, setOrderFilter } from '@src/entities/order';

type OrderTabsProps = {
  style?: StyleProp<ViewStyle>;
};

const OrderTabs: FC<OrderTabsProps> = props => {
  const { style } = props;
  const dispatch = useAppDispatch();
  const orderFilter = useAppSelector(state => state.orders.orderFilter);

  const handleFilterChange = (value: ORDER_CATEGORIES) => {
    dispatch(setOrderFilter(value));
  };

  return (
    <Tabs
      style={style}
      tabs={orderTabs}
      value={orderFilter}
      //@ts-ignore
      onChange={handleFilterChange}
    />
  );
};

export default OrderTabs;
