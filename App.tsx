import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '~/routes';
import light from '~/styles/themes/light';
import { ThemeProvider } from 'styled-components';
import AppProvider from '~/hooks';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <AppProvider>
          <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle="light-content"
          />
          <Routes />
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
