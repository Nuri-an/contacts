import { ReactElement } from 'react';
import { LayoutChangeEvent } from 'react-native';
import * as S from './styles';

interface HeaderTitleProps {
  allowFontScaling?: boolean;
  children: string;
  onLayout?: (e: LayoutChangeEvent) => void;
}

function TitleStack(props, { children }: HeaderTitleProps): ReactElement {
  return <S.Title {...props}>{children}</S.Title>;
}
export default TitleStack;
