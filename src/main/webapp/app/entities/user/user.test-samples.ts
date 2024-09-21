import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 29723,
  login: 'Lv',
};

export const sampleWithPartialData: IUser = {
  id: 20560,
  login: 'LVkU',
};

export const sampleWithFullData: IUser = {
  id: 26097,
  login: 'p4_@BwCo',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
