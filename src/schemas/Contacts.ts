import * as Yup from 'yup';

export const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  mobile: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .required('Campo obrigatório')
    .email('Email inválido, tente novamente'),
});
