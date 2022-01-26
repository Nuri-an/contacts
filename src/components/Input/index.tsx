import { ReactElement } from 'react';
import { TextInputProps } from 'react-native';
import * as S from './styles';

interface IInput extends Omit<TextInputProps, 'placeholderTextColor'> {
  label: string;
}

function Input({ label, ...res }: IInput): ReactElement {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.CustomInput {...res} />
    </S.Container>
  );
}
export default Input;
