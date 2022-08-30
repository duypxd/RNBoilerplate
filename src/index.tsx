import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';
import NavigationContainer from './navigation';
import {ThemeContext, ThemeProvider} from './themes/ThemeContext';
import AsyncStorage from '@react-native-community/async-storage';
import AppRoot from './navigation/AppRoot';

const App = () => {
  const [initialRouteName, setInitialRouteName] = useState('Intro');

  const checkShowIntro = async () => {
    const initIntro = await AsyncStorage.getItem('initIntro');
    if (initIntro) {
      setInitialRouteName('App');
    }
  };

  useEffect(() => {
    checkShowIntro();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <ThemeProvider>
          <ThemeContext.Consumer>
            {contexts => (
              <NavigationContainer {...contexts}>
                <AppRoot initialRouteName={initialRouteName} />
              </NavigationContainer>
            )}
          </ThemeContext.Consumer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
