import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '~/routes';
import light from '~/styles/themes/light';
import { ThemeProvider } from 'styled-components';
import AppProvider from '~/hooks';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { FlashMessageComponent } from '~/components';

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
          <FlashMessage
            MessageComponent={(props) => <FlashMessageComponent {...props} />}
            style={{ backgroundColor: '#fff' }}
            backgroundColor="#fff"
            color="#fff"
            floating={false}
          />
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
