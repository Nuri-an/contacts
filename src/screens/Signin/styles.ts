import styled from 'styled-components/native';
import { ContainerArea } from '~/styles/objects/ContainerArea';
import ResponsiveSize from '~/utils/ResponsiveSizes';

export const Container = styled(ContainerArea)`
  justify-content: space-between;
`;

export const Content = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.montserratBold};
  font-size: ${({ theme }) => ResponsiveSize(theme.fontSize.title)};
  text-align: center;

  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 24px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.montserratMedium};
  font-size: ${({ theme }) => ResponsiveSize(theme.fontSize.text)};
  letter-spacing: -0.5px;
  line-height: ${({ theme }) => ResponsiveSize(theme.fontSize.text + 10)};
  text-align: center;

  color: ${({ theme }) => theme.colors.textSecundary};

  margin-bottom: 56px;
`;

export const TextHelp = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.montserratMedium};
  font-size: ${({ theme }) => ResponsiveSize(theme.fontSize.textSecundary)};
  color: ${({ theme }) => theme.colors.textSecundary};
  text-align: right;
`;
