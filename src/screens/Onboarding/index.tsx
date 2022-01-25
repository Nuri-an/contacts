import { ReactElement } from 'react';
import { WelcomeDrawing } from '~/assets/vectors/WelcomeDrawing';
import { Button } from '~/components';
import * as S from './styles';

function Onboarding(): ReactElement {
  return (
    <S.Container>
      <WelcomeDrawing />
      <S.Title>Bem-vindo! É hora de começar uma nova experiência</S.Title>
      <S.SubTitle>
        Para ter acesso a todas as funcionalidades que podemos oferecer, faça
        login ou crie uma nova conta.
      </S.SubTitle>
      <Button style="default" color="primary" text="Começar" />
    </S.Container>
  );
}
export default Onboarding;
