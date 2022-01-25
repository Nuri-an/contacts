import { ReactElement } from 'react';
import * as S from './styles';

interface IButton {
  style: 'outline' | 'default';
  color?: 'red' | 'primary';
  text: string;
}

function Button({ style, color, text }: IButton): ReactElement {
  return (
    <S.Container style={style} color={color} activeOpacity={0.7}>
      <S.Text style={style}>{text}</S.Text>
    </S.Container>
  );
}
export default Button;
