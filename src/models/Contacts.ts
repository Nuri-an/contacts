import { IDatabaseFields } from './Common';

export interface IContact extends IDatabaseFields {
  name: string;
  mobile: string;
  email: string;
}

export interface IContactForm extends Omit<IContact, keyof IDatabaseFields> {}
