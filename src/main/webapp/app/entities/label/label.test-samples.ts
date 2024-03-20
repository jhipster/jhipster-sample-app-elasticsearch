import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 17504,
  label: 'once',
};

export const sampleWithPartialData: ILabel = {
  id: 21270,
  label: 'mid',
};

export const sampleWithFullData: ILabel = {
  id: 31954,
  label: 'including irritably',
};

export const sampleWithNewData: NewLabel = {
  label: 'ahX',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
