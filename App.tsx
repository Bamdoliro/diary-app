/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './src/navigation/MainNavigator';
import { theme } from './src/styles/theme';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <MainNavigator />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.color.background,
  },
});
