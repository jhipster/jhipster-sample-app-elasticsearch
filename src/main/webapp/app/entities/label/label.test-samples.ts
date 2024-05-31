import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 637,
  label: 'cleverly madly',
};

export const sampleWithPartialData: ILabel = {
  id: 31773,
  label: 'candid huzzah',
};

export const sampleWithFullData: ILabel = {
  id: 18386,
  label: 'yuck tone',
};

export const sampleWithNewData: NewLabel = {
  label: 'bibliography grumble',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
