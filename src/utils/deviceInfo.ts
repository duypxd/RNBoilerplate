import { Platform } from 'react-native';
import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';

export const hasNotch = DeviceInfo.hasNotch();
export const versionDevice = Platform.Version;
export const isIOS = Platform.OS === 'ios';
export const isAndroid = !isIOS;
export const appName = Config.APP_NAME;

// Theme is supported by system on iOS 13+ or Android 10+
export const supportSystemTheme = () => {
  const systemVersion = parseInt(DeviceInfo.getSystemVersion(), 10);
  return systemVersion >= (isIOS ? 13 : 10);
};
