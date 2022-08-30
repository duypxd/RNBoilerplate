import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import NavigationContainer from './navigation';
import {ThemeContext, ThemeProvider} from './themes/ThemeContext';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <ThemeProvider>
          <ThemeContext.Consumer>
            {contexts => <NavigationContainer {...contexts} />}
          </ThemeContext.Consumer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
