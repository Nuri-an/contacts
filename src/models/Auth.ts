export interface ISigninData {
  email: string;
  password: string;
}
export interface ISigninResponse {
  type: 'bearer';
  token: string;
  expires_at: string;
}

export interface IAuthState extends Omit<ISigninResponse, 'type'> {
  signed: boolean;
}
export interface IAuthContextData {
  authData: IAuthState;
  loadingData: boolean;
  singIn(credentials: ISigninData): Promise<boolean>;
}
