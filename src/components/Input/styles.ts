import styled, { css } from 'styled-components/native';
import ResponsiveSize from '~/utils/ResponsiveSizes';

interface IInput {
  isInvalid?: boolean;
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
}))<IInput>`
  height: 56px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 8px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.textPlaceholder};

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      margin-bottom: 4px;
      border: ${({ theme }) => `1px solid ${theme.colors.red}75`};
    `};
`;

export const TextError = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.montserratMedium};
  font-size: ${({ theme }) => ResponsiveSize(theme.fontSize.textSecundary - 1)};
  color: ${({ theme }) => theme.colors.red};
  opacity: 0.7;
`;
