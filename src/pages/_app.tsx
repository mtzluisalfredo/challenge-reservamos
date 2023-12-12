import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from '@/styles/theme';
import configureStore from '@/store/configureStore';

const store = configureStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}
