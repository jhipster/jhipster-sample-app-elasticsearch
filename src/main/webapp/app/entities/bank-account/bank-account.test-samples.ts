import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 29733,
  name: 'fasten instead recent',
  balance: 29767.3,
};

export const sampleWithPartialData: IBankAccount = {
  id: 25873,
  name: 'till dome meaningfully',
  balance: 19066.86,
};

export const sampleWithFullData: IBankAccount = {
  id: 4516,
  name: 'drat',
  balance: 26199.22,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'epauliere as boohoo',
  balance: 5298.29,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
