import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { Form } from '~/components';
import { IContactForm } from '~/models/Contacts';
import { ContactsService } from '~/services';
import * as S from './styles';

type ParamList = {
  Data: {
    id: string;
  };
};
function Edit(): ReactElement {
  const {
    params: { id },
  } = useRoute<RouteProp<ParamList, 'Data'>>();
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();
  const [initialData, setInitialData] = useState({} as IContactForm);

  const handleGetContact = useCallback(async () => {
    try {
      const { data } = await ContactsService.getShow(id);
      setInitialData(data);
    } catch (error) {
      throw new Error('Error fetching contact');
    }
  }, []);

  const handlePutContact = useCallback(async (data: IContactForm) => {
    try {
      setLoading(true);
      await ContactsService.update(
        {
          ...data,
          mobile: data.mobile
            .replace('(', '')
            .replace(')', '')
            .replace(' ', '')
            .replace('-', ''),
        },
        id,
      );
      showMessage({
        type: 'success',
        message: 'Contato atualizado com sucesso!',
      });

      setLoading(false);
      navigate('Home');
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        showMessage({
          type: 'danger',
          message: error.message || 'Erro ao atualizar contato',
        });
      }
      throw new Error('Error update contact');
    }
  }, []);

  useEffect(() => {
    handleGetContact();
  }, []);

  return (
    <S.Container>
      <S.Content behavior={Platform.OS === 'ios' ? 'height' : 'position'}>
        <S.Text>
          Faça as alterções necessárias e {'\n'} ao terminar salve seu contato
        </S.Text>
        <Form
          initialData={initialData}
          titleBtnSubmit="Salvar alterações"
          onSubmit={(val) => handlePutContact(val)}
          loadOnSubmit={loading}
        />
      </S.Content>
    </S.Container>
  );
}
export default Edit;
