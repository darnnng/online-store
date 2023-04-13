import jwtDecode from 'jwt-decode';
import { $host } from './index';

export const registration = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phone: string
) => {
  const { data } = await $host.post('api/user/registration', {
    email,
    password,
    firstName,
    lastName,
    phone,
  });
  // localStorage.setItem('token', JSON.stringify(jwtDecode(data.token)));
  // localStorage.setItem('user', data.token);
  return jwtDecode(data.token);
};

export const login = async (email: string, password: string) => {
  const { data } = await $host.post('api/user/login', { email, password });
  // localStorage.setItem('token', JSON.stringify(data.token));
  // localStorage.setItem('user', JSON.stringify(jwtDecode(data.token)));
  return jwtDecode(data.token);
};
