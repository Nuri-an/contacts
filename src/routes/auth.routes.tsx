import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { useTheme } from 'styled-components';
import { Onboarding, Signin } from '~/screens';
import Constants from 'expo-constants';
import { BackButtonStack, TitleStack } from './components';
import { RootStackParamList } from '~/@types/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

function AuthRoutes(): ReactElement {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
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
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={Onboarding}
      />
      <Stack.Screen
        options={{
          title: 'Login',
        }}
        name="Signin"
        component={Signin}
      />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
