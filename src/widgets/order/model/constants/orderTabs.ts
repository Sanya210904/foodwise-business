import { Option } from '@src/shared/types/Option';
import { OrderCategories } from '@src/entities/order';

export const orderTabs: Option[] = [
  { value: OrderCategories.PROPS, label: 'Propositions' },
  { value: OrderCategories.NEW_ORDERS, label: 'Pending' },
  { value: OrderCategories.PAID_ORDERS, label: 'Paid' },
];
