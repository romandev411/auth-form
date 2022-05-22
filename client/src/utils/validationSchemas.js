import * as Yup from 'yup';

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: Yup.string().min(3),
  lastName: Yup.string().min(3),
  displayName: Yup.string().min(3),
  email: Yup.string().required(),
  password: Yup.string()
    .min(3)
    .required(),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null])
    .required(),
  chackPromo: Yup.boolean(),
});

export const SIGN_IN_SCHEMA = Yup.object({
  login: Yup.string().min(3),
  password: Yup.string().min(3),
  rememberMe: Yup.boolean(),
});
