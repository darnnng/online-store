import { object, string } from 'yup';

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
  phone: string()
    .matches(/^\d+$/, 'The field should have digits only')
    .max(12),
  email: string()
    .email()
    .required(),
  password: string()
    .required()
    .min(5),
});

export const entitiesSchema = object({
  brand: string().max(25),
});
