import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '~/routes';
import light from '~/styles/themes/light';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
