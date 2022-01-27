import { ReactElement } from 'react';
import { ActivityIndicator } from 'react-native';
import * as S from './styles';

interface IButton {
  styled: 'outline' | 'default';
  color?: 'red' | 'primary';
  text: string;
  loading?: boolean;
  onPress: () => void;
}

function Button({
  styled,
  color,
  text,
  loading,
  onPress,
}: IButton): ReactElement {
  return (
    <S.Container
      style={styled}
      color={color}
      disabled={loading}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <S.Text style={styled}>{text}</S.Text>
      )}
    </S.Container>
  );
}
export default Button;
