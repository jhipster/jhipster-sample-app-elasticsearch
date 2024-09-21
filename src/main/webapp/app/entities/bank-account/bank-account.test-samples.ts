import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 25204,
  name: 'obvious',
  balance: 30173.27,
};

export const sampleWithPartialData: IBankAccount = {
  id: 22263,
  name: 'annual expatiate psst',
  balance: 27694.75,
};

export const sampleWithFullData: IBankAccount = {
  id: 1885,
  name: 'sometimes',
  balance: 13169.55,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'positively',
  balance: 23208.22,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
