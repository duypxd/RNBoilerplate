import React from 'react';
import {StatusBar} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';

import {TabNavigator} from './TabNavigator';
import RegisterScreen from '../screens/Auth/Register';
import LoginScreen from '../screens/Auth/Login';

import {AppRoutes} from './Routes';
// import type {ThemesApp} from '../themes/Colors';

// interface AppNavigatorProps {
//   Colors: ThemesApp;
//   isDarkTheme: boolean;
//   setSchemeTheme?: (scheme: 'light' | 'dark') => void;
// }

export type AppTabParamList = {
  [AppRoutes.APP_SCREEN]: undefined;
  [AppRoutes.LOGIN_SCREEN]: undefined;
  [AppRoutes.REGISTER_SCREEN]: undefined;
  [AppRoutes.HOME_SCREEN]: undefined;
  [AppRoutes.SETTING_SCREEN]: undefined;
};
const Stack = createNativeStackNavigator<AppTabParamList>();

const AppNavigator = ({Colors}: any) => {
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
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={AppRoutes.APP_SCREEN}
      >
        <Stack.Screen name={AppRoutes.APP_SCREEN} component={TabNavigator} />
        <Stack.Screen name={AppRoutes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen
          name={AppRoutes.REGISTER_SCREEN}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
