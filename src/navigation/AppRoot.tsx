import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppNavigator from '.';

import IntroScreen from '../screens/Intro';
import RNView from '../components/RNView';
import RNText from '../components/RNText';

import {AppRoutes} from './Routes';

const Stack = createNativeStackNavigator<any>();

const AppRoot = React.memo(({initialRouteName}: any) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const init = React.useCallback(async () => {
    setTimeout(() => {
      setIsLoading(true);
    }, 500);
  }, []);

  React.useEffect(() => {
    init();
  }, [init]);

  if (!isLoading) {
    return (
      <RNView flex={1} center>
        <RNText>{'Loading...'}</RNText>
      </RNView>
    );
  }
  return (
    <RNView color="#ffffff" flex={1}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={initialRouteName}
      >
        <Stack.Screen name={AppRoutes.INTRO} component={IntroScreen} />
        <Stack.Screen name={AppRoutes.APP} component={AppNavigator} />
      </Stack.Navigator>
    </RNView>
  );
});

export default AppRoot;
