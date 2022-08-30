import React, {useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useColorScheme} from 'react-native';

import {supportSystemTheme} from '../utils/deviceInfo';
import * as ThemeColors from '../themes/Colors';

const THEME_PREFERENCES_KEY = 'RC_THEME_PREFERENCES_KEY';

export const ThemeContext = React.createContext({
  isDarkTheme: false,
  Colors: ThemeColors.light,
  setSchemeTheme: () => {},
});

export const ThemeProvider = ({children}: any) => {
  const useScheme: any = useColorScheme();
  const colorScheme = supportSystemTheme() ? useScheme : 'light';
  const [isDarkTheme, setIsDarkTheme] = useState(colorScheme === 'dark');

  useEffect(() => {
    setTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorScheme]);

  const setTheme = () => {
    AsyncStorage.getItem(THEME_PREFERENCES_KEY).then(theme => {
      const dark: boolean = theme === 'dark' || colorScheme === 'dark';
      setIsDarkTheme(dark);
    });
  };

  const setSchemeTheme = async (scheme: 'light' | 'dark'): Promise<void> => {
    setIsDarkTheme(scheme === 'dark');
    await AsyncStorage.setItem(THEME_PREFERENCES_KEY, scheme);
  };

  const defaultTheme: any = {
    isDarkTheme,
    Colors: isDarkTheme ? ThemeColors.dark : ThemeColors.light,
    setSchemeTheme,
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
