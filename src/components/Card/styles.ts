import { Smartphone } from 'react-native-feather';
import styled from 'styled-components/native';
import ResponsiveSize from '~/utils/ResponsiveSizes';

interface IText {
  color: 'textBlack' | 'textSecundary';
  size: 'text' | 'textSecundary';
  isSemiBold?: boolean;
}

export const Container = styled.TouchableOpacity`
  border-radius: 8px;

  height: 153px;
  width: 100%;
  margin-top: 16px;

  border: 1px solid #e0e0e0;

  padding: 25px 16px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Text = styled.Text<IText>`
  color: ${({ theme, color }) => theme.colors[`${color}`]};
  font-family: ${({ theme, isSemiBold }) =>
    isSemiBold
      ? theme.fontFamily.montserratSemiBold
      : theme.fontFamily.montserratMedium};
  font-size: ${({ theme, size }) => ResponsiveSize(theme.fontSize[`${size}`])};
  letter-spacing: -0.5px;
`;

export const BoxRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxPhone = styled.View`
  display: flex;
  flex-direction: row;
`;

export const IconPhone = styled(Smartphone)`
  width: ${ResponsiveSize(24)};
  height: ${ResponsiveSize(24)};

  color: ${({ theme }) => theme.colors.textBlack};

  margin-right: 8px;
`;
