import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQueryClient } from 'react-query';
import WButton from '../components/WButton';

import WView from '../components/WView';
import type { ThemesApp } from '../themes/Colors';
import { useTheme } from '../themes/ThemeContext';
import { showAlertMessage } from '../utils/alert';
import axios from '../api/axios';

const Home = () => {
  const queryClient = useQueryClient();
  const Colors: ThemesApp = useTheme().Colors;

  const mutationSignOut = useMutation(
    async () => await axios.post('api/auth/signOut'),
    {
      onError: () => {
        showAlertMessage('An unexpected error occurred.', 'Oops!');
      },
      onSuccess: async () => {
        await AsyncStorage.clear();
        queryClient.refetchQueries(['Auth']);
      },
    },
  );

  const signOut = () => mutationSignOut.mutate();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: Colors.background }]}>
      <WView fill center pHoz={28}>
        <WButton
          title={'SignOut'}
          onPress={signOut}
          disabled={mutationSignOut.isLoading}
          loading={mutationSignOut.isLoading}
          mTop={24}
        />
      </WView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
