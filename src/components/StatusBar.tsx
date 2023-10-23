import React from 'react';
import { StatusBar as StyledStatusBar } from 'react-native';
import { theme } from '../styles/theme';

type StatusBarProps = {
  bgColor?: string;
};

const StatusBar = ({ bgColor = theme.color.background }: StatusBarProps) => {
  return <StyledStatusBar backgroundColor={bgColor} barStyle="dark-content" />;
};

export default StatusBar;
