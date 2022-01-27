import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ISigninData } from '~/models';
import api from '~/services/api';
import { AuthService } from '~/services';
import { IAuthContextData, IAuthState } from '~/models/Auth';

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const PREFIX = '@Contacts';
  const [authData, setAuthData] = useState<IAuthState>();
  const [loading, setLoading] = useState(true);

  // load data async storage
  useEffect(() => {
    async function loadStorageData() {
      const storagedSigned = await AsyncStorage.getItem(`${PREFIX}:signed`);
      const storagedToken = await AsyncStorage.getItem(`${PREFIX}:token`);
      const storagedExpiresAt = await AsyncStorage.getItem(
        `${PREFIX}:expires_at`,
      );

      if (storagedSigned && storagedToken) {
        api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;
        setAuthData({
          signed: true,
          token: storagedToken,
          expires_at: storagedExpiresAt,
        });
        setLoading(false);
      } else {
        setAuthData({
          signed: false,
          token: undefined,
          expires_at: undefined,
        } as IAuthState);
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  // signin
  const singIn = useCallback(async (data: ISigninData) => {
    try {
      const { data: user } = await AuthService.signin(data);

      api.defaults.headers.common.Authorization = `Bearer ${user.token}`;
      AsyncStorage.setItem(`${PREFIX}:signed`, 'true');
      AsyncStorage.setItem(`${PREFIX}:token`, user.token);
      AsyncStorage.setItem(`${PREFIX}:expires_at`, user.expires_at);
      setAuthData({
        signed: true,
        token: user.token,
        expires_at: user.expires_at,
      });

      return true;
    } catch {
      throw new Error('Erro ao realizar login');
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authData,
        loadingData: loading,
        singIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  return context;
}
