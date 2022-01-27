import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Home } from '~/screens';
import { RootStackParamList } from '~/@types/RootStackParamList';
import { ScreenOptions } from './ScreenOptions';

const Stack = createStackNavigator<RootStackParamList>();

function AppRoutes(): ReactElement {
  return (
    <Stack.Navigator screenOptions={ScreenOptions}>
      <Stack.Screen
        options={{
          title: 'Listagem de usuários',
        }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
