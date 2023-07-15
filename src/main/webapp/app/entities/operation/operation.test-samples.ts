import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 11669,
  date: dayjs('2015-08-04T15:36'),
  amount: 14086,
};

export const sampleWithPartialData: IOperation = {
  id: 7554,
  date: dayjs('2015-08-04T15:27'),
  description: 'sensor',
  amount: 15538,
};

export const sampleWithFullData: IOperation = {
  id: 18498,
  date: dayjs('2015-08-04T17:40'),
  description: 'sticky',
  amount: 12406,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T11:51'),
  amount: 1911,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
