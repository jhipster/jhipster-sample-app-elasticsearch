import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 16142,
  date: dayjs('2015-08-05T07:18'),
  amount: 29197.69,
};

export const sampleWithPartialData: IOperation = {
  id: 16816,
  date: dayjs('2015-08-05T01:29'),
  description: 'asterisk readily',
  amount: 22115.61,
};

export const sampleWithFullData: IOperation = {
  id: 4132,
  date: dayjs('2015-08-05T00:32'),
  description: 'gah uh-huh',
  amount: 3172.83,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T02:07'),
  amount: 25986.68,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
