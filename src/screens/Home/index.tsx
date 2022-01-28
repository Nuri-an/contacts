import { useNavigation } from '@react-navigation/native';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Linking,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { Button, Card, Popup } from '~/components';
import { IContact } from '~/models/Contacts';
import { ContactsService } from '~/services';
import Icon from '~/assets/images/Icon.png';
import { Copy, Mail, PhoneCall } from 'react-native-feather';
import * as Clipboard from 'expo-clipboard';
import FormatPhone from '~/utils/formatPhone';
import * as S from './styles';

function Home(): ReactElement {
  const [allContacts, setAllContacts] = useState([] as IContact[]);
  const [contacts, setContacts] = useState([] as IContact[]);
  const [contactShow, setContactShow] = useState<IContact>();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [showPopupDelete, setShowPopupDelete] = useState(false);
  const [showPopupContact, setShowPopupContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState<number>();
  const { navigate } = useNavigation();

  const handleGetContacts = useCallback(async () => {
    try {
      const { data } = await ContactsService.getIndex();
      setAllContacts(data);
      setContacts(data.slice(0, 6));
      setPage(1);

      const howMany = Math.ceil(data.length / 5);
      setTotalPage(howMany);
    } catch (error) {
      throw new Error('Error fetching contacts');
    }
  }, []);

  const handleDeleteContacts = useCallback(async () => {
    try {
      setLoading(true);
      await ContactsService.delete(selectedContact);
      showMessage({
        type: 'success',
        message: 'Contato deletado',
      });
      setShowPopupDelete(false);
      setSelectedContact(undefined);
      handleGetContacts();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        showMessage({
          type: 'danger',
          message: error.message,
        });
      }
    }
  }, [selectedContact]);

  const handleGetContact = useCallback(async (id: number) => {
    try {
      const { data } = await ContactsService.getShow(String(id));
      setContactShow(data);
      setShowPopupContact(true);
    } catch (error) {
      throw new Error('Error fetching contact');
    }
  }, []);

  const handleLoadList = () => {
    // finished pagination
    if (page > totalPage || !contacts.length) return;

    // last page
    if (page === totalPage) {
      setContacts((prevSatate) =>
        prevSatate.concat(allContacts.slice(page * 6)),
      );
      return;
    }

    // any other page
    setContacts((prevSatate) =>
      prevSatate.concat(allContacts.slice(page * 6, (page + 1) * 6)),
    );
    setPage(page + 1);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await handleGetContacts();
    setRefreshing(false);
  };

  useEffect(() => {
    handleGetContacts();
  }, []);

  return (
    <S.Container>
      <Popup showPopup={showPopupDelete}>
        <View>
          <S.Text color="textBlack" size="titleSecundary" isSemiBold isCenter>
            Tem certeza que deseja excluir {'\n'} este contato?
          </S.Text>
          <S.Text color="textSecundary" size="text" isCenter>
            Após excluir, não será possivel {'\n'} recuperar o contato.
          </S.Text>
        </View>
        <S.BoxBtnDelete>
          <S.BtnDelete marginRight>
            <Button
              styled="default"
              color="red"
              text="Excluir contato"
              loading={loading}
              onPress={handleDeleteContacts}
            />
          </S.BtnDelete>
          <S.BtnDelete>
            <Button
              styled="outline"
              text="Não excluir"
              onPress={() => {
                setShowPopupDelete(false);
                setSelectedContact(undefined);
              }}
            />
          </S.BtnDelete>
        </S.BoxBtnDelete>
      </Popup>
      <Popup showPopup={showPopupContact}>
        <S.Logo source={Icon} />

        <S.Text color="primary" size="titleSecundary" isCenter>
          {contactShow?.name}
        </S.Text>
        <S.BoxMailing>
          <TouchableOpacity
            onPress={() => Linking.openURL(`mailto:${contactShow?.email}`)}
          >
            <Mail color="#424242" width={30} height={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${contactShow.mobile}`)}
          >
            <PhoneCall color="#424242" width={30} height={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Clipboard.setString(
                `nome: ${contactShow?.name} ${'\n'}email: ${
                  contactShow?.email
                } ${'\n'}celular: ${FormatPhone(contactShow?.mobile)}`,
              )
            }
          >
            <Copy color="#424242" width={30} height={30} />
          </TouchableOpacity>
        </S.BoxMailing>
        <S.BoxBackList
          onPress={() => {
            setShowPopupContact(false);
            setContactShow(undefined);
          }}
        >
          <S.Text color="textSecundary" size="textSecundary" isCenter>
            Voltar
          </S.Text>
        </S.BoxBackList>
      </Popup>
      <Button
        styled="default"
        color="primary"
        text="Cadastrar contato"
        onPress={() => navigate('Register')}
      />
      <S.FlexBox>
        <S.Text size="text" color="textSecundary">
          Total: {allContacts.length} usuários
        </S.Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() =>
            showMessage({
              type: 'info',
              message: 'Em construção...',
            })
          }
        >
          <S.Text size="textSecundary" color="primary">
            Ver todos
          </S.Text>
        </TouchableOpacity>
      </S.FlexBox>

      <FlatList
        data={contacts}
        contentContainerStyle={{ paddingBottom: 64 }}
        horizontal={false}
        keyExtractor={(contact) => String(contact.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadList}
        onEndReachedThreshold={0.2}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={() => <ActivityIndicator color="#142B5D" />}
        renderItem={({ item: contact }) => (
          <Card
            id={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.mobile}
            onPressCard={(id) => handleGetContact(id)}
            onPressTrash={(id) => {
              setShowPopupDelete(true);
              setSelectedContact(id);
            }}
          />
        )}
      />
    </S.Container>
  );
}
export default Home;
