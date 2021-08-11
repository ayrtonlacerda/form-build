import { extendTheme, theme } from '@chakra-ui/react';

const ThemeApplication = extendTheme({
  ...theme,
  styles: {
    global: {
      body: {
        letterSpacing: '0.5px',
      },
    },
  },
});

export default ThemeApplication;
