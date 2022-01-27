import { useNavigation } from '@react-navigation/native';
import { ReactElement } from 'react';
import { WelcomeDrawing } from '~/assets/vectors/WelcomeDrawing';
import { Button } from '~/components';
import * as S from './styles';

function Onboarding(): ReactElement {
  const navigation = useNavigation();
  return (
    <S.Container>
      <WelcomeDrawing />
      <S.Title>Bem-vindo! É hora de começar uma nova experiência</S.Title>
      <S.SubTitle>
        Para ter acesso a todas as funcionalidades que podemos oferecer, faça
        login ou crie uma nova conta.
      </S.SubTitle>
      <Button
        styled="default"
        color="primary"
        text="Começar"
        onPress={() => navigation.navigate('Signin')}
      />
    </S.Container>
  );
}
export default Onboarding;
