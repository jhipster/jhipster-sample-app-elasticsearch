import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 35613,
  date: dayjs('2015-08-04T15:36'),
  amount: 42990,
};

export const sampleWithPartialData: IOperation = {
  id: 23053,
  date: dayjs('2015-08-04T15:27'),
  amount: 12706,
};

export const sampleWithFullData: IOperation = {
  id: 51319,
  date: dayjs('2015-08-05T01:29'),
  description: 'quod Fiji',
  amount: 20484,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T03:45'),
  amount: 4103,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
