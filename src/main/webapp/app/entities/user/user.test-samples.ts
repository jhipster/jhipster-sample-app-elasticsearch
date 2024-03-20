import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 4780,
  login: 'DY+G7H@KsjEy\\wF6s\\<xy\\>LXiR\\FslLv\\nPhvB',
};

export const sampleWithPartialData: IUser = {
  id: 6970,
  login: 'q',
};

export const sampleWithFullData: IUser = {
  id: 11746,
  login: 'GRjjzl',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
