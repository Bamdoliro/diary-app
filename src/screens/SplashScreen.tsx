import React, { useEffect } from 'react';
import { theme } from '../styles/theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainNavigatorParams } from '../navigation/MainNavigator';
import styled from '@emotion/native';

type SplashProps = {
  navigation: StackNavigationProp<MainNavigatorParams>;
};

const SplashScreen = ({ navigation }: SplashProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1500);
  }, []);

  return (
    <Container>
      <SplashImage source={require('../assets/images/splash.png')} />
    </Container>
  );
};

export default SplashScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.background};
`;

const SplashImage = styled.Image`
  width: 180px;
  height: 210px;
`;
