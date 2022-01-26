import { ReactElement, useEffect, useState, useRef } from 'react';
import { Animated, TextInputProps } from 'react-native';
import * as S from './styles';

interface IInput extends Omit<TextInputProps, 'placeholderTextColor'> {
  label: string;
  error?: string;
}

function Input({ label, error, ...res }: IInput): ReactElement {
  const [positionX, setPositionX] = useState<number>();
  const [swingInputError] = useState(new Animated.Value(0));
  const showingTextError = useRef(new Animated.Value(0)).current;

  const swing = () => {
    Animated.spring(swingInputError, {
      toValue: positionX,
      speed: 2,
      bounciness: 30,
      useNativeDriver: true,
    }).start();
  };

  const swingRight = () => {
    Animated.timing(swingInputError, {
      toValue: positionX + 10,
      duration: 10,
      useNativeDriver: true,
    }).start(swing);
  };

  const fadeIn = () => {
    Animated.timing(showingTextError, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (error) {
      swingRight();
      fadeIn();
    }
  }, [error]);

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <Animated.View
        onLayout={({ nativeEvent: { layout } }) => setPositionX(layout.x)}
        style={{ transform: [{ translateX: swingInputError }] }}
      >
        <S.CustomInput isInvalid={!!error} {...res} />
      </Animated.View>
      {error && (
        <Animated.View style={{ opacity: showingTextError }}>
          <S.TextError>{error}</S.TextError>
        </Animated.View>
      )}
    </S.Container>
  );
}
export default Input;
