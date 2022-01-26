import React, { ReactElement, ReactNode } from 'react';

import { AuthProvider } from './auth';

interface IAppProvider {
  children: ReactNode;
}

function AppProvider({ children }: IAppProvider): ReactElement {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProvider;
