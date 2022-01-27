import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.35);
  flex: 1;

  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  background-color: #fff;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 252px;
  width: 90%;

  padding: 32px 25px;
`;
