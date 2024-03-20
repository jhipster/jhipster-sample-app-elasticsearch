import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 31335,
  name: 'forenenst astride once',
  balance: 18909.5,
};

export const sampleWithPartialData: IBankAccount = {
  id: 23057,
  name: 'faithfully',
  balance: 7284.2,
};

export const sampleWithFullData: IBankAccount = {
  id: 26637,
  name: 'refract',
  balance: 29726.57,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'phenomenon',
  balance: 29727.72,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
