import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';

import SettingScreen from '../screens/Setting';
import HomeScreen from '../screens/Home';

import RNIcon from '../components/RNIcon';

import {AppRoutes} from './Routes';

export type AppTabParamList = {
  [AppRoutes.HOME_SCREEN]: undefined;
  [AppRoutes.SETTING_SCREEN]: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

export const TabNavigator = (): React.ReactElement => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      // tabBar={props => <Bottom {...props} />}
      screenOptions={({route}: any) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        tabBarIcon: ({focused}) => {
          let iconName: string = '';
          let iconColor: string = '';
          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home-outline';
            iconColor = focused ? colors.primary : colors.border;
          } else if (route.name === 'SettingScreen') {
            iconName = focused ? 'settings' : 'settings-outline';
            iconColor = focused ? colors.primary : colors.border;
          }

          return (
            <RNIcon
              type="Ionicons"
              name={iconName}
              size={24}
              color={iconColor}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name={AppRoutes.HOME_SCREEN}
        component={HomeScreen}
        options={() => {
          return {
            title: 'Home',
          };
        }}
      />
      <Tab.Screen
        name={AppRoutes.SETTING_SCREEN}
        component={SettingScreen}
        options={() => {
          return {
            title: 'Setting',
          };
        }}
      />
    </Tab.Navigator>
  );
};
