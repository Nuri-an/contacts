import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Edit, Home, Register } from '~/screens';
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
      <Stack.Screen
        options={{
          title: 'Cadastrar um novo contato',
        }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{
          title: 'Atualizar contato',
        }}
        name="Edit"
        component={Edit}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
