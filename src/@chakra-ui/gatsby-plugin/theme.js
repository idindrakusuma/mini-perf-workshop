import { extendTheme } from '@chakra-ui/react';

/**
 * override chackra-ui for personalize purpose
 * see the docs: https://chakra-ui.com/guides/using-fonts
 */
const theme = extendTheme({
  fonts: {
    heading: `'Dancing Script', cursive`,
    body: `'Open Sans', sans-serif`,
    serif: `'Nunito', sans-serif`,
  },
});

export default theme;
