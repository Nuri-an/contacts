import { ReactElement } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

interface IError {
  width: string;
  height: string;
}

export const Error = ({ width, height }: IError): ReactElement => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="12" fill="#FC3333" />
    <Line x1="18" y1="6" x2="6" y2="18" stroke="white" stroke-width="2" />
    <Line x1="6" y1="6" x2="18" y2="18" stroke="white" stroke-width="2" />
  </Svg>
);
