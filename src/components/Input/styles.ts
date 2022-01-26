import styled, { css } from 'styled-components/native';
import ResponsiveSize from '~/utils/ResponsiveSizes';

interface IButton {
  style: 'outline' | 'default';
  color?: 'red' | 'primary';
}

export const Container = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.montserratMedium};
  font-size: ${({ theme }) => ResponsiveSize(theme.fontSize.text)};
  letter-spacing: -0.5px;

  margin-bottom: 4px;
`;

export const CustomInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: `${theme.colors.textPlaceholder}64`,
}))`
  height: 56px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 8px;
  padding: 16px;

  color: ${({ theme }) => theme.colors.textPlaceholder};
`;
