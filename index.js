import { AppRegistry, LogBox } from 'react-native';
import Config from 'react-native-config';
import App from './src';
import { name as appName } from './app.json';
import * as Sentry from '@sentry/react-native';

LogBox.ignoreLogs(['new NativeEventEmitter', 'EventEmitter.removeListener']);

if (!__DEV__) {
  Sentry.init({
    dsn: Config.SENTRY_DSN,
    environment: Config.APP_ENVIRONMENT,
  });
}

AppRegistry.registerComponent(appName, () => App);
