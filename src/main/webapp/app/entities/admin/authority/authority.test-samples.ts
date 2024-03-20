import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'fe4f26fd-7f51-4f74-9b46-c916e76b2178',
};

export const sampleWithPartialData: IAuthority = {
  name: 'bef088cd-263a-45d0-88cc-e3bd11550f37',
};

export const sampleWithFullData: IAuthority = {
  name: 'cf8a251e-4825-4006-8af3-440143288b71',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
