import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 11669,
  date: dayjs('2015-08-04T15:36'),
  amount: 14086.55,
};

export const sampleWithPartialData: IOperation = {
  id: 7554,
  date: dayjs('2015-08-04T15:27'),
  description: 'generally',
  amount: 6712.27,
};

export const sampleWithFullData: IOperation = {
  id: 12406,
  date: dayjs('2015-08-05T11:51'),
  description: 'polenta',
  amount: 4131.93,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T00:32'),
  amount: 12670.16,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
