import { ReactElement } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

interface ICheck {
  width: string;
  height: string;
}

export const Check = ({ width, height }: ICheck): ReactElement => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="12" fill="#9DF28F" />
    <Path
      d="M17.3333 9L9.99996 16.3333L6.66663 13"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
