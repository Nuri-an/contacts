import { Formik } from 'formik';
import { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Input } from '~/components';
import { ISigninData } from '~/models';
import { SigninSchema } from '~/schemas';
import * as S from './styles';

function Signin(): ReactElement {
  const initialValues: ISigninData = { email: '', password: '' };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={SigninSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <S.Container>
          <S.Content>
            <S.Title>Bem-vindo(a)!</S.Title>
            <S.SubTitle>
              Faça login para acessar nossa {'\n'} plataforma
            </S.SubTitle>
            <Input
              label="Email"
              placeholder="Digite seu email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={!!touched.email && errors.email}
            />
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={!!touched.password && errors.password}
            />
            <TouchableOpacity activeOpacity={0.6}>
              <S.TextHelp>Problemas com login?</S.TextHelp>
            </TouchableOpacity>
          </S.Content>
          <Button
            style="default"
            color="primary"
            text="Entrar"
            onPress={handleSubmit}
          />
        </S.Container>
      )}
    </Formik>
  );
}
export default Signin;
