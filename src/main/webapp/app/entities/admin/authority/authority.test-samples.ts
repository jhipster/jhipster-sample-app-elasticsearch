import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'e864636c-9032-4ce1-8d94-87c4fb3c9c41',
};

export const sampleWithPartialData: IAuthority = {
  name: 'df60d676-badc-4511-8591-2a85485e9c73',
};

export const sampleWithFullData: IAuthority = {
  name: '1e4fecaa-5728-4fa9-af33-324a3587618c',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
