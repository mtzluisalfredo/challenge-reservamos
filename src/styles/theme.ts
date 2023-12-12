import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';

export const theme = extendTheme({
  colors: colors,
  components: {
    Input: {
      search: {
        borderRadius: 0
      },
    },
  },
});
