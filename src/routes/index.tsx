import {
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { ReactElement } from 'react';
import AuthRoutes from './auth.routes';

function Routes(): ReactElement {
  // load fonts
  const [fontsLoaded] = useFonts({
    MontserratMedium: Montserrat_500Medium,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <AuthRoutes />;
}
export default Routes;
