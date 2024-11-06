import axios, { AxiosInstance } from 'axios';

// interface IResponse {
//   config: object;
//   headers: object;
//   data: object | [];
//   request: object;
// }

// const messageNotifyEnglish = {
//   InternalServerError: 'Internal Server Error',
//   InvalidParameter: 'Invalid parameter',
// };

// const apiNotShowError = [''];

const BASE_URL = import.meta.env.VITE_BE_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors
// Add a request interceptor
axiosInstance.interceptors.request.use(
  async function (config: any) {
    // Do something before request is sent

    // config.headers.Authorization = accessToken;
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: any) => {
    console.log('Response Error in Axios Instance: ', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
