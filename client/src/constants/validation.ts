import { object, string } from 'yup';
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const loginSchema = object({
  email: string()
    .email()
    .required(),
  password: string()
    .required()
    .min(5),
});

export const signUpSchema = object({
  firstName: string().max(20),
  lastName: string().max(25),
  phone: string().matches(phoneRegExp, 'Phone number is not valid'),
  email: string()
    .email()
    .required(),
  password: string()
    .required()
    .min(5),
});
