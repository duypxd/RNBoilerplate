import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import type { ThemesApp } from '../themes/Colors';
import { useTheme } from '../themes/ThemeContext';
import { appName } from '../utils/deviceInfo';

const MainNavigator = () => {
  const Colors: ThemesApp = useTheme().Colors;
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: Colors?.background }]}>
      <Text style={{ color: Colors.text }}>{appName}</Text>
    </SafeAreaView>
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
