import { Option } from '@src/shared/types/Option';
import { ORDER_CATEGORIES } from '@src/entities/order';

export const orderTabs: Option[] = [
  { value: ORDER_CATEGORIES.PROPS, label: 'Propositions' },
  { value: ORDER_CATEGORIES.NEW_ORDERS, label: 'Pending' },
  { value: ORDER_CATEGORIES.PAID_ORDERS, label: 'Paid' },
];
