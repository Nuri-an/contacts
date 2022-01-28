import { useNavigation } from '@react-navigation/native';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { Form } from '~/components';
import { IContactForm } from '~/models/Contacts';
import { ContactsService } from '~/services';
import * as S from './styles';

function Register(): ReactElement {
  const [loading, setLoading] = useState(false);
  const [loadInitialData, setLoadInitialData] = useState(true);
  const [inputFocus, setInputFocus] = useState(false);
  const { navigate } = useNavigation();
  const initialData = {
    name: '',
    mobile: '',
    email: '',
  };

  const handlePostContact = useCallback(async (data: IContactForm) => {
    try {
      setLoading(true);
      await ContactsService.create({
        ...data,
        mobile: data.mobile
          .replace('(', '')
          .replace(')', '')
          .replace(' ', '')
          .replace('-', ''),
      });
      showMessage({
        type: 'success',
        message: 'Contato cadastrado com sucesso!',
      });

      setLoading(false);
      navigate('Home');
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        showMessage({
          type: 'danger',
          message: error.message || 'Erro ao cadastrar contato',
        });
      }
      throw new Error('Error create contact');
    }
  }, []);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setLoadInitialData(false);
      setInputFocus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setInputFocus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <S.Content
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      contentContainerStyle={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.BoxContent>
          <S.Container isInputFocus={inputFocus}>
            <S.Text>
              Preencha as informações para {'\n'} cadastrar um novo contato
            </S.Text>
            <Form
              initialData={initialData}
              titleBtnSubmit="Cadastrar contato"
              onSubmit={(val) => handlePostContact(val)}
              loadOnSubmit={loading}
              loadInitialData={loadInitialData}
            />
          </S.Container>
        </S.BoxContent>
      </TouchableWithoutFeedback>
    </S.Content>
  );
}
export default Register;
