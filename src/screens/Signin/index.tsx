import { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Input } from '~/components';
import * as S from './styles';

function Signin(): ReactElement {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Bem-vindo(a)!</S.Title>
        <S.SubTitle>Faça login para acessar nossa {'\n'} plataforma</S.SubTitle>
        <Input label="Email" placeholder="Digite seu email" />
        <Input label="Senha" placeholder="Digite sua senha" />
        <TouchableOpacity activeOpacity={0.6}>
          <S.TextHelp>Problemas com login?</S.TextHelp>
        </TouchableOpacity>
      </S.Content>
      <Button
        style="default"
        color="primary"
        text="Entrar"
        onPress={() => alert('login')}
      />
    </S.Container>
  );
}
export default Signin;
