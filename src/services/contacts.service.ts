import { AxiosPromise } from 'axios';
import { IContact } from '~/models/Contacts';

import api from './api';

export default class ContactsService {
  static readonly BASEURL = '/contacts';

  static getIndex(): AxiosPromise<IContact[]> {
    return api.get(`${this.BASEURL}`);
  }

  static getShow(id: number): AxiosPromise<IContact> {
    return api.get(`${this.BASEURL}/${id}`);
  }

  static delete(id: number): AxiosPromise<string> {
    return api.delete(`${this.BASEURL}/${id}`);
  }
}
