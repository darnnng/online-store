import axios from 'axios';

const $host = axios.create({
  baseURL: 'http://localhost:5000/',
});

const $authHost = axios.create({
  baseURL: 'http://localhost:5000/',
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
