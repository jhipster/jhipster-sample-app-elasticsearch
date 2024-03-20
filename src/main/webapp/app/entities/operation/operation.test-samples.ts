import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 30345,
  date: dayjs('2015-08-04T21:52'),
  amount: 28779.38,
};

export const sampleWithPartialData: IOperation = {
  id: 16785,
  date: dayjs('2015-08-05T01:53'),
  amount: 32178.42,
};

export const sampleWithFullData: IOperation = {
  id: 18636,
  date: dayjs('2015-08-04T19:51'),
  description: 'blah young desert',
  amount: 12346.47,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T02:35'),
  amount: 23261.46,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
