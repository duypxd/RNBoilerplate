import axios from 'axios';
import Config from 'react-native-config';

axios.defaults.baseURL = Config.API_URL;
axios.defaults.timeout = 15000;

export const setHeaderToAxios = (accessToken: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const get = (url: string, params?: any) => axios.get(url, {params});

const post = (url: string, data?: any) => axios.post(url, data);

const put = (url: string, data?: any) => axios.put(url, data);

const remove = (url: string, data?: any) => axios.delete(url, data);

const patch = (url: string, data?: any) => axios.patch(url, data);

export default {
  get,
  post,
  put,
  patch,
  remove,
};
