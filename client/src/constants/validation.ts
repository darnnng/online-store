import { mixed, number, object, string } from 'yup';

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

export const deviceSchema = object().shape({
  picture: mixed()
    .test('type', 'The file must be JPG, JPEG or PNG', (image) => {
      if (image?.length) {
        return (
          image[0].type === 'image/jpeg' ||
          image[0].type === 'image/jpg' ||
          image[0].type === 'image/png' ||
          image[0].type === 'image/gif'
        );
      }
      return true;
    })
    .test('fileSize', 'The file is too large', (image) => {
      if (image?.length) {
        return image[0].size <= 500000;
      }
      return true;
    }),
  price: number()
    .typeError('price must be a number')
    .required(),
  name: string()
    .required()
    .min(5),
});
