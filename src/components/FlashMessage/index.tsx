import { ReactElement, useEffect, useState } from 'react';
import { MessageComponentProps } from 'react-native-flash-message';
import { Check } from '~/assets/vectors/Check';
import { Error } from '~/assets/vectors/Error';
import ResponsiveSize from '~/utils/ResponsiveSizes';
import { Platform } from 'react-native';
import AwaitingIcon from '~/assets/images/Awaiting.png';
import * as S from './styles';

function FlashMessage({
  message,
}: React.PropsWithChildren<MessageComponentProps>): ReactElement {
  const [elevationValue, setElevationValue] = useState(0);

  const IconSize = (): string => {
    const newSize = ResponsiveSize(24).split('px')[0];
    return newSize;
  };

  useEffect(() => {
    // set shadow
    setTimeout(() => setElevationValue(1), 200);

    // remove shadow
    setTimeout(() => setElevationValue(0), 2100);
  }, []);

  return (
    <S.Container
      style={Platform.OS === 'android' ? { elevation: elevationValue } : {}}
    >
      {
        // eslint-disable-next-line no-nested-ternary
        message.type === 'success' ? (
          <Check width={IconSize()} height={IconSize()} />
        ) : message.type === 'danger' ? (
          <Error width={IconSize()} height={IconSize()} />
        ) : (
          <S.ImageIcon source={AwaitingIcon} />
        )
      }
      <S.Text>{message.message}</S.Text>
    </S.Container>
  );
}
export default FlashMessage;
