import styled from 'styled-components/native';
import { ContainerArea } from '~/styles/objects/ContainerArea';
import ResponsiveSize from '~/utils/ResponsiveSizes';

export const Container = styled(ContainerArea)``;

export const Content = styled.KeyboardAvoidingView`
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
