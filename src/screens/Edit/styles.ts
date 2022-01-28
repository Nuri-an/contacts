import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import { ContainerArea } from '~/styles/objects/ContainerArea';
import ResponsiveSize from '~/utils/ResponsiveSizes';
import Constants from 'expo-constants';

interface IContainer {
  isInputFocus?: boolean;
}

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #fff;
`;

export const Container = styled(ContainerArea)<IContainer>`
  ${({ isInputFocus }) =>
    !isInputFocus &&
    css`
      min-height: ${Dimensions.get('window').height -
      (Constants.statusBarHeight + 54)}px;
    `}
`;

export const BoxContent = styled.ScrollView`
  flex: 1;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textSecundary};
  font-family: ${({ theme }) => theme.fontFamily.montserratMedium};
  font-size: ${({ theme }) => ResponsiveSize(theme.fontSize.text)};
  letter-spacing: -0.5px;
  line-height: ${({ theme }) => ResponsiveSize(theme.fontSize.text + 10)};
  text-align: center;

  margin-bottom: 64px;
`;
