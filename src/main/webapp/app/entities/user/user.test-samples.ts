import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 29723,
  login: 'tr^r@WqNV\\49ory\\RCxjY\\9sBR\\3Xf93',
};

export const sampleWithPartialData: IUser = {
  id: 20256,
  login: 'NUJ',
};

export const sampleWithFullData: IUser = {
  id: 14636,
  login: 'Qh@Y6VxO\\HmQW\\n2vE8\\>Q5WRe\\.dG\\Jr0Y',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
