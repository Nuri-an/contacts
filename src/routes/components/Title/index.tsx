import { ReactElement } from 'react';
import * as S from './styles';
import { LayoutChangeEvent } from 'react-native';

interface HeaderTitleProps {
  allowFontScaling?: boolean;
  children: string;
  onLayout?: (e: LayoutChangeEvent) => void;
}

function TitleStack(props: HeaderTitleProps): ReactElement {
  return <S.Title {...props}>{props.children}</S.Title>;
}
export default TitleStack;
