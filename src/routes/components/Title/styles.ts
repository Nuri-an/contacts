import styled from 'styled-components/native';
import ResponsiveSize from '~/utils/ResponsiveSizes';

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.montserratMedium};
  font-size: ${({ theme }) => ResponsiveSize(theme.fontSize.text)};
  letter-spacing: -0.5px;
  text-align: center;

  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 24px;
`;
