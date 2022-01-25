import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Onboarding } from '~/screens';

const Stack = createStackNavigator();

function AuthRoutes(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={Onboarding}
      />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
