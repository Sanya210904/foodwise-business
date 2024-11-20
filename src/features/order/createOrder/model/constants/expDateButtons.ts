import { Option } from '@src/shared/types/Option';
import { ExpDateValue } from './ExpDateValue';

export const expDateButtons: Option<ExpDateValue>[] = [
  { label: 'Today', value: ExpDateValue.TODAY },
  { label: 'Tomorrow', value: ExpDateValue.TOMORROW },
  { label: 'In two days', value: ExpDateValue.TWO_DAYS },
];
