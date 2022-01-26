import { ReactElement } from 'react';
import * as S from './styles';

interface IButton {
  style: 'outline' | 'default';
  color?: 'red' | 'primary';
  text: string;
  onPress: () => void;
}

function Button({ style, color, text, onPress }: IButton): ReactElement {
  return (
    <S.Container
      style={style}
      color={color}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <S.Text style={style}>{text}</S.Text>
    </S.Container>
  );
}
export default Button;
