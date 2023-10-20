import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';

import MainNavigator from './src/navigation/MainNavigator';
import { theme } from './src/styles/theme';

function App() {
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
