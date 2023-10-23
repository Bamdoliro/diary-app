import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import StatusBar from './src/components/StatusBar';

import MainNavigator from './src/navigation/MainNavigator';
import { theme } from './src/styles/theme';

const App = () => {
  return (
    <>
      <StatusBar />
      <View style={styles.root}>
        <MainNavigator />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.color.background,
  },
});
