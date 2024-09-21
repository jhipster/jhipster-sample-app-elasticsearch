import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'e66693c1-98cf-4394-81f0-66ac151a58ec',
};

export const sampleWithPartialData: IAuthority = {
  name: '14ea52f9-3343-4868-887b-e369818c04de',
};

export const sampleWithFullData: IAuthority = {
  name: '55420177-5707-44aa-9831-b043bf6a7ad0',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
