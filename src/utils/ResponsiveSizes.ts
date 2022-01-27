import { Dimensions } from 'react-native';
import theme from '~/styles/themes/light';

function ResponsiveSize(size: number): string {
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
  const { breakpoints } = theme;

  if (deviceWidth <= breakpoints.lg) return `${size * 0.75}px`;
  if (deviceWidth < breakpoints.xl) return `${size * 0.875}px`;
  return `${size}px`;
}

export default ResponsiveSize;
