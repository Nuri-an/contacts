import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import ResponsiveSize from '~/utils/ResponsiveSizes';

export const Container = styled.View`
  background-color: #fff;

  margin: 52px 16px 0px 16px;
  padding: 18px 16px;

  border: 1px solid #e0e0e0;
  border-radius: 8px;

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  ${Platform.OS === 'ios' &&
  css`
    box-shadow: 0px 1px 12px rgba(224, 224, 224, 0.25);
  `}
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.montserratMedium};
  font-size: ${({ theme }) => ResponsiveSize(theme.fontSize.textSecundary)};
  letter-spacing: -0.5px;

  color: ${({ theme }) => theme.colors.textBlack};
  margin-left: 16px;
`;

export const ImageIcon = styled.Image`
  width: ${ResponsiveSize(24)};
  height: ${ResponsiveSize(24)};
`;
