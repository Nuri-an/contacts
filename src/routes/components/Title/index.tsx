import { ReactElement } from 'react';
import { LayoutChangeEvent } from 'react-native';
import * as S from './styles';

interface HeaderTitleProps {
  allowFontScaling?: boolean;
  children: string;
  onLayout?: (e: LayoutChangeEvent) => void;
}

function TitleStack({ children, ...rest }: HeaderTitleProps): ReactElement {
  return <S.Title {...rest}>{children}</S.Title>;
}
export default TitleStack;
