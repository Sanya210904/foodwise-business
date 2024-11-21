import { z, ZodType } from 'zod';
import { checkCorrectIsoDate } from '../lib/checkCorrectIsoDate';
import { isoDateRegex } from '../constants/isoDateRegex';

export type CreateOrderFormData = {
  discount: number | null;
  quantity: number | null;
  expDate: string;
};

export const CreateOrderSchema: ZodType<CreateOrderFormData> = z.object({
  discount: z
    .number({
      required_error: 'Discount is required field',
    })
    .min(1, { message: 'Discount should be more than 0%' })
    .max(99, { message: 'Discount should be less than 100%' }),
  quantity: z
    .number({
      required_error: 'Amount is required field',
      message: 'Amount should be number',
    })
    .min(1, { message: 'Amount should be more than 0' }),
  expDate: z
    .string({ required_error: 'Expiration date is required field' })
    .regex(isoDateRegex, 'Date should be DD/MM/YYYY format')
    .refine(
      value => {
        return checkCorrectIsoDate(value);
      },
      { message: 'Date is not correct' },
    ),
});
