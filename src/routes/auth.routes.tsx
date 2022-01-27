import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Onboarding, Signin } from '~/screens';
import Constants from 'expo-constants';
import { RootStackParamList } from '~/@types/RootStackParamList';
import { BackButtonStack, TitleStack } from './components';

const Stack = createStackNavigator<RootStackParamList>();

function AuthRoutes(): ReactElement {
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
