import { object, string } from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const schema = object().shape({
  username: string().required('Login is required'),
  password: string().required('Password is required'),
});
