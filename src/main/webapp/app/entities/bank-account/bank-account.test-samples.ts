import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 29733,
  name: 'Recumbent Baby glistening',
  balance: 28297,
};

export const sampleWithPartialData: IBankAccount = {
  id: 23603,
  name: 'Road Bespoke trader',
  balance: 29335,
};

export const sampleWithFullData: IBankAccount = {
  id: 22263,
  name: 'olive so Wooden',
  balance: 27646,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'Audi Account algorithm',
  balance: 9031,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
