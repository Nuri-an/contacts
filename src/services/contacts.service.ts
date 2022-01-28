import { AxiosPromise } from 'axios';
import { IContact, IContactForm } from '~/models/Contacts';

import api from './api';

export default class ContactsService {
  static readonly BASEURL = '/contacts';

  static getIndex(): AxiosPromise<IContact[]> {
    return api.get(`${this.BASEURL}`);
  }

  static getShow(id: string): AxiosPromise<IContact> {
    return api.get(`${this.BASEURL}/${id}`);
  }

  static delete(id: number): AxiosPromise<string> {
    return api.delete(`${this.BASEURL}/${id}`);
  }

  static create(data: IContactForm): AxiosPromise<IContact> {
    return api.post(`${this.BASEURL}/`, data);
  }

  static update(data: IContactForm, id: string): AxiosPromise<IContact> {
    return api.put(`${this.BASEURL}/${id}`, data);
  }
}
