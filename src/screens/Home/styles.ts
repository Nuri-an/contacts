import styled, { css } from 'styled-components/native';
import { ContainerArea } from '~/styles/objects/ContainerArea';
import ResponsiveSize from '~/utils/ResponsiveSizes';

interface IText {
  color: 'primary' | 'textSecundary' | 'textBlack';
  size: 'text' | 'textSecundary' | 'titleSecundary';
  isSemiBold?: boolean;
  isCenter?: boolean;
}

interface IBtnDelete {
  marginRight?: boolean;
}

export const Container = styled(ContainerArea)`
  padding-bottom: 0px;
`;

export const FlexBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 51px;
`;

export const Text = styled.Text<IText>`
  color: ${({ theme, color }) => theme.colors[`${color}`]};
  font-family: ${({ theme, isSemiBold }) =>
    isSemiBold
      ? theme.fontFamily.montserratSemiBold
      : theme.fontFamily.montserratMedium};
  font-size: ${({ theme, size }) => ResponsiveSize(theme.fontSize[`${size}`])};
  letter-spacing: -0.5px;
  line-height: ${({ theme, size }) =>
    ResponsiveSize(theme.fontSize[`${size}`] + 10)};

  ${({ isCenter }) =>
    isCenter &&
    css`
      text-align: center;
    `}
`;

export const BtnDelete = styled.View<IBtnDelete>`
  width: 48%;

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: 2%;
    `}
`;

export const BoxBtnDelete = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 24px;

  width: 100%;
`;

export const Logo = styled.Image`
  align-self: center;

  border-radius: 200px;

  height: 100px;
  width: 100px;

  margin-top: -25%;
`;

export const BoxMailing = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const BoxBackList = styled.TouchableOpacity`
  border-top-color: #eeeeee;
  border-top-width: 1px;
  padding-top: 20px;
`;
