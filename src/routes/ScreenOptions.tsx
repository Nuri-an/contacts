import { StackNavigationOptions } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { BackButtonStack, TitleStack } from './components';

export const ScreenOptions: StackNavigationOptions = {
  headerStyle: {
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
  },
  headerStatusBarHeight: Constants.statusBarHeight + 20,
  headerTitle: (props) => <TitleStack {...props} />,
  headerTitleAlign: 'center',
  headerBackImage: () => <BackButtonStack />,
  headerBackTitleVisible: false,
  headerMode: 'float',
};
