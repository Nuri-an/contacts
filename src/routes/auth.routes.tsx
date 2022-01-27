import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Onboarding, Signin } from '~/screens';
import { RootStackParamList } from '~/@types/RootStackParamList';
import { ScreenOptions } from './ScreenOptions';

const Stack = createStackNavigator<RootStackParamList>();

function AuthRoutes(): ReactElement {
  return (
    <Stack.Navigator screenOptions={ScreenOptions}>
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
