import { Formik } from 'formik';
import { ReactElement, useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Input } from '~/components';
import { ISigninData } from '~/models';
import { SigninSchema } from '~/schemas';
import { showMessage } from 'react-native-flash-message';
import { useAuth } from '~/hooks/auth';
import * as S from './styles';

function Signin(): ReactElement {
  const initialValues: ISigninData = { email: '', password: '' };
  const { singIn } = useAuth();
  const [loading, setLoading] = useState(false);

  const SubmitSigin = useCallback(async (data: ISigninData) => {
    try {
      setLoading(true);
      await singIn(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        showMessage({
          type: 'danger',
          message: error.message,
        });
      }
    }
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={SubmitSigin}
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
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={!!touched.password && errors.password}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() =>
                showMessage({
                  type: 'info',
                  message: 'Em construção...',
                })
              }
            >
              <S.TextHelp>Problemas com login?</S.TextHelp>
            </TouchableOpacity>
          </S.Content>
          <Button
            styled="default"
            color="primary"
            text="Entrar"
            loading={loading}
            onPress={handleSubmit}
          />
        </S.Container>
      )}
    </Formik>
  );
}
export default Signin;
