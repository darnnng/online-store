import jwtDecode from 'jwt-decode';
import { $authHost, $host } from './index';

export const registration = async (email: string, password: string) => {
  const { data } = await $host.post('api/user/registration', { email, password });
  localStorage.setItem('token', JSON.stringify(data.token));
  localStorage.setItem('user', jwtDecode(data.token));
  return jwtDecode(data.token);
};

export const login = async (email: string, password: string) => {
  const { data } = await $host.post('api/user/login', { email, password });
  localStorage.setItem('token', JSON.stringify(data.token));
  localStorage.setItem('user', jwtDecode(data.token));
  return jwtDecode(data.token);
};
