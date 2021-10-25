import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import WView from '../components/WView';
import type { ThemesApp } from '../themes/Colors';
import { useTheme } from '../themes/ThemeContext';
import AsyncStorage from '@react-native-community/async-storage';
import axios, { setHeaderToAxios } from '../api/axios';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const Colors: ThemesApp = useTheme().Colors;
  const { isLoading, data }: any = useQuery({
    queryKey: 'Auth',
    queryFn: async () => {
      const accessToken: string =
        (await AsyncStorage.getItem('accessToken')) || '';
      setHeaderToAxios(accessToken);
      if (accessToken) {
        const resp = await axios.get('api/user/get-me');
        return resp.data;
      }
      return null;
    },
  });

  if (isLoading) {
    return (
      <WView fill center color={Colors.background}>
        <ActivityIndicator color={Colors.primary} />
      </WView>
    );
  }
  return (
    <Stack.Navigator>
      {data?.status || data?.result?._id ? (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
