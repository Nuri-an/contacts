import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Signin } from '~/screens';

const Stack = createStackNavigator();

function AuthRoutes(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signin"
        component={Signin}
      />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
