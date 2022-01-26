import * as Yup from 'yup';

export const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .required('Campo obrigatório')
    .email('Email inválido, tente novamente'),

  password: Yup.string().required('Campo obrigatório'),
});
