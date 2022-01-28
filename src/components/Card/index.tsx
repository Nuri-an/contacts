import { useNavigation } from '@react-navigation/native';
import { ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Trash2 } from 'react-native-feather';
import { State, TapGestureHandler } from 'react-native-gesture-handler';
import FormatPhone from '~/utils/formatPhone';
import ResponsiveSize from '~/utils/ResponsiveSizes';
import * as S from './styles';

interface ICard {
  id: number;
  name: string;
  email: string;
  phone: string;
  onPressCard: (id: number) => void;
  onPressTrash: (id: number) => void;
}

function Card({
  id,
  name,
  email,
  phone,
  onPressCard,
  onPressTrash,
}: ICard): ReactElement {
  const { navigate } = useNavigation();

  const IconSize = (): string => {
    const newSize = ResponsiveSize(24).split('px')[0];
    return newSize;
  };

  return (
    <S.Container activeOpacity={0.7}>
      <TapGestureHandler
        numberOfTaps={2}
        maxDurationMs={300}
        onHandlerStateChange={(e) => {
          if (e.nativeEvent.oldState === State.ACTIVE) {
            onPressCard(id);
          }
        }}
      >
        <S.Content>
          <S.BoxRow>
            <View>
              <S.Text color="textBlack" size="text" isSemiBold>
                {name}
              </S.Text>
              <S.Text color="textSecundary" size="textSecundary">
                {email}
              </S.Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigate('Edit', { id })}
            >
              <S.Text color="textSecundary" size="text">
                Editar
              </S.Text>
            </TouchableOpacity>
          </S.BoxRow>
          <S.BoxRow>
            <S.BoxPhone>
              <S.IconPhone />
              <S.Text color="textBlack" size="text">
                {FormatPhone(phone)}
              </S.Text>
            </S.BoxPhone>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onPressTrash(id)}
            >
              <Trash2 color="#FC3333" width={IconSize()} height={IconSize()} />
            </TouchableOpacity>
          </S.BoxRow>
        </S.Content>
      </TapGestureHandler>
    </S.Container>
  );
}
export default Card;
