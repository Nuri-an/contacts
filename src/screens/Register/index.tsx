import { useNavigation } from '@react-navigation/native';
import { ReactElement, useCallback, useState } from 'react';
import { Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { Form } from '~/components';
import { IContactForm } from '~/models/Contacts';
import { ContactsService } from '~/services';
import * as S from './styles';

function Register(): ReactElement {
  const [loading, setLoading] = useState(false);
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

  return (
    <S.Container>
      <S.Content behavior={Platform.OS === 'ios' ? 'height' : 'position'}>
        <S.Text>
          Preencha as informações para {'\n'} cadastrar um novo contato
        </S.Text>
        <Form
          initialData={initialData}
          titleBtnSubmit="Cadastrar contato"
          onSubmit={(val) => handlePostContact(val)}
          loadOnSubmit={loading}
        />
      </S.Content>
    </S.Container>
  );
}
export default Register;
