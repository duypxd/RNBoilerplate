import AsyncStorage from '@react-native-community/async-storage';

const persist: any = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null,
  version: 1,
  whitelist: ['config', 'auth'],
  blacklist: [],
};

export default persist;
