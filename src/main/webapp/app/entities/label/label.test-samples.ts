import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 1945,
  label: 'connecting protocol',
};

export const sampleWithPartialData: ILabel = {
  id: 14030,
  label: 'Southeast routine',
};

export const sampleWithFullData: ILabel = {
  id: 6655,
  label: 'except Universal bluetooth',
};

export const sampleWithNewData: NewLabel = {
  label: 'canine utilize',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
