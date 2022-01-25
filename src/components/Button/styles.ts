import styled, { css } from 'styled-components/native';
import ResponsiveSize from '~/utils/ResponsiveSizes';

interface IButton {
  style: 'outline' | 'default';
  color?: 'red' | 'primary';
}

export const Container = styled.TouchableOpacity<IButton>`
  border-radius: 8px;

  height: 56px;
  width: 100%;

  align-items: center;
  justify-content: center;

  ${({ style, color, theme }) =>
    style === 'outline'
      ? css`
          border: 1px solid #424242;
        `
      : css`
          background-color: ${theme.colors[`${color}`]};
        `}
`;

export const Text = styled.Text<IButton>`
  font-family: ${({ theme }) => theme.fontFamily.montserratMedium};
  font-size: ${({ theme }) => ResponsiveSize(theme.fontSize.text)};
  letter-spacing: -0.5px;

  color: ${({ theme, style }) =>
    style === 'outline' ? theme.colors.textBlack : theme.colors.textWhite};
`;
