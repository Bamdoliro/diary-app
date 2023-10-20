import { useNavigationContainerRef } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';

import SplashScreen from 'react-native-splash-screen';
import MainNavigator, {
  MainNavigatorParams,
} from './src/navigation/MainNavigator';
import { theme } from './src/styles/theme';

function App() {
  const { navigate } = useNavigationContainerRef<MainNavigatorParams>();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      navigate('Home');
    }, 1000);
  }, []);

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
