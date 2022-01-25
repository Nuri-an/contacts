import { DefaultTheme } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import theme from '~/styles/themes/light';

function ResponsiveSize(size: number): string {
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
  const { breakpoints } = theme;

  if (deviceWidth <= breakpoints.lg) return `${size * 0.75}px`;
  else if (deviceWidth < breakpoints.xl) return `${size * 0.875}px`;
  else return `${size}px`;
}

export default ResponsiveSize;
