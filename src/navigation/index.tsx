import React from 'react';
import { StatusBar } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import MainNavigator from './MainNavigator';
import type { ThemesApp } from '../themes/Colors';

interface AppNavigatorProps {
  Colors: ThemesApp;
  isDarkTheme: boolean;
  setSchemeTheme?: (scheme: 'light' | 'dark') => void;
}

const AppNavigator = ({ Colors }: AppNavigatorProps) => {
  const navigatorTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...Colors,
    },
  };

  return (
    <NavigationContainer theme={navigatorTheme}>
      <StatusBar animated barStyle="default" />
      <MainNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
