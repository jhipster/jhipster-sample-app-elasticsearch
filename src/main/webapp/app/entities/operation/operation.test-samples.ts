import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 15538,
  date: dayjs('2015-08-05T08:01'),
  amount: 9352.28,
};

export const sampleWithPartialData: IOperation = {
  id: 1911,
  date: dayjs('2015-08-04T13:12'),
  description: 'ew for beyond',
  amount: 11138.86,
};

export const sampleWithFullData: IOperation = {
  id: 15035,
  date: dayjs('2015-08-04T22:57'),
  description: 'enthusiastically',
  amount: 32156.17,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T05:24'),
  amount: 27404.12,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
