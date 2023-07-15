import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 90740,
  name: 'Recumbent Baby glittering',
  balance: 86355,
};

export const sampleWithPartialData: IBankAccount = {
  id: 72032,
  name: 'meter nonconforming Towels',
  balance: 95306,
};

export const sampleWithFullData: IBankAccount = {
  id: 92084,
  name: 'Technician adipisci Sports',
  balance: 68928,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'Iceland Rap 4th',
  balance: 37112,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
