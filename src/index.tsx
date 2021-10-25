import React from 'react';
import NavigationContainer from './navigation';
import { ThemeContext, ThemeProvider } from './themes/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {contexts => <NavigationContainer {...contexts} />}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

export default App;
