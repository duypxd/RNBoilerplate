import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import NavigationContainer from './navigation';
import { ThemeContext, ThemeProvider } from './themes/ThemeContext';

const App = () => {
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <ThemeContext.Consumer>
          {contexts => <NavigationContainer {...contexts} />}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </AppearanceProvider>
  );
};

export default App;
