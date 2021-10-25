import axios from 'axios';
import Config from 'react-native-config';

axios.defaults.baseURL = Config.API_URL;
axios.defaults.timeout = 15000;

export const setHeaderToAxios = (accessToken: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const get = (url: string, params?: any) => axios.get(url, { params });

const post = async (url: string, data?: any) => {
  try {
    const response = await axios.post(url, data);
    return response?.data;
  } catch (err: any) {
    return err?.response;
  }
};

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
