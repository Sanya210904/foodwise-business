import { Option } from '@src/shared/types/Option';

export enum ExpDateValue {
  TODAY = 'today',
  TOMORROW = 'tomorrow',
  TWO_DAYS = 'twoDays',
}

export const expDateLabelToDate: Record<ExpDateValue, number> = {
  today: 0,
  tomorrow: 1,
  twoDays: 2,
};

export const expDateButtons: Option<ExpDateValue>[] = [
  { label: 'Today', value: ExpDateValue.TODAY },
  { label: 'Tomorrow', value: ExpDateValue.TOMORROW },
  { label: 'In two days', value: ExpDateValue.TWO_DAYS },
];
