import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { theme } from '../styles/theme';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';

export type MainNavigatorParams = {
  Splash: undefined;
  Home: undefined;
};

const StackNavigator = createStackNavigator<MainNavigatorParams>();

const screenOptions: StackNavigationOptions = {
  presentation: 'transparentModal',
};

function MainNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Splash"
        screenOptions={() => ({
          headerShown: false,
          backgroundColor: theme.color.background,
        })}>
        <StackNavigator.Screen
          name="Splash"
          component={SplashScreen}
          options={screenOptions}
        />
        <StackNavigator.Screen
          name="Home"
          component={HomeScreen}
          options={screenOptions}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
