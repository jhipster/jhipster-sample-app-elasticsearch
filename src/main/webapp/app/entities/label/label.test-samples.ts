import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 19849,
  label: 'knowingly anti',
};

export const sampleWithPartialData: ILabel = {
  id: 19770,
  label: 'whispered beep rim',
};

export const sampleWithFullData: ILabel = {
  id: 1712,
  label: 'furthermore fooey when',
};

export const sampleWithNewData: NewLabel = {
  label: 'pro',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
