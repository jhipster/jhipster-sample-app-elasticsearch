import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 637,
  label: 'firewall bypass',
};

export const sampleWithPartialData: ILabel = {
  id: 4597,
  label: 'Dakota Bicycle',
};

export const sampleWithFullData: ILabel = {
  id: 9545,
  label: 'except uniform',
};

export const sampleWithNewData: NewLabel = {
  label: 'Customer cheerfully',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
