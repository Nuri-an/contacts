import { AxiosPromise } from 'axios';

import { ISigninData, ISigninResponse } from '../models/Auth';

import api from './api';

export default class AuthService {
  static readonly BASEURL = '/auth';

  static signin(data: ISigninData): AxiosPromise<ISigninResponse> {
    return api.post(`${this.BASEURL}/login`, data);
  }
}
