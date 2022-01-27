import { ReactElement, ReactNode } from 'react';
import { Modal } from 'react-native';
import * as S from './styles';

interface IPopup {
  children: ReactNode;
  showPopup: boolean;
}

function Popup({ children, showPopup }: IPopup): ReactElement {
  return (
    <Modal
      visible={showPopup}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <S.Container>
        <S.Content>{children}</S.Content>
      </S.Container>
    </Modal>
  );
}
export default Popup;
