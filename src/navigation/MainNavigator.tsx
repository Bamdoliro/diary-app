import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../styles/theme';

export type MainNavigatorParams = {
  Home: undefined;
};

const Stack = createStackNavigator<MainNavigatorParams>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: true,
          backgroundColor: theme.color.background,
        })}>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
