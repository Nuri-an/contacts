import { IDatabaseFields } from './Common';

export interface IContact extends IDatabaseFields {
  name: string;
  mobile: string;
  email: string;
}
