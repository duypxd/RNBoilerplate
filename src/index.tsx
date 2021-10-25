import React from 'react';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setHeaderToAxios } from './api/axios';

import NavigationContainer from './navigation';
import { ThemeContext, ThemeProvider } from './themes/ThemeContext';

export const queryCache = new QueryCache({
  onError(error, query) {
    console.log('queryCache', error, query);
  },
  onSuccess: data => {
    console.log('data 1', data);
  },
});

export const mutationCache = new MutationCache({
  onError(error, variables, context, mutation) {
    console.log(
      'mutationCache error',
      error,
      variables,
      context,
      mutation.options,
    );
  },
  onSuccess: async (data: any) => {
    if (data?.token) {
      setHeaderToAxios(data?.token);
      await AsyncStorage.setItem('accessToken', data?.token);
    }
  },
});

export const mainClient = new QueryClient({
  mutationCache,
  queryCache,
  defaultOptions: {},
});

const App = () => {
  return (
    <QueryClientProvider client={mainClient}>
      <ThemeProvider>
        <ThemeContext.Consumer>
          {contexts => <NavigationContainer {...contexts} />}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
