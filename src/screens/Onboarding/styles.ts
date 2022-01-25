import styled from 'styled-components/native';
import { ContainerArea } from '~/styles/objects/ContainerArea';
import ResponsiveSize from '~/utils/ResponsiveSizes';

export const Container = styled(ContainerArea)`
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.montserratBold};
  font-size: ${({ theme }) => ResponsiveSize(theme.fontSize.title)};
  letter-spacing: -0.5px;
  text-align: center;

  color: ${({ theme }) => theme.colors.primary};

  margin: 51px 0px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.montserratMedium};
  font-size: ${({ theme }) => ResponsiveSize(theme.fontSize.text)};
  letter-spacing: -0.5px;
  line-height: ${({ theme }) => ResponsiveSize(theme.fontSize.text + 10)};
  text-align: center;

  color: ${({ theme }) => theme.colors.textSecundary};

  margin: 0px 0px 51px 0px;
`;
