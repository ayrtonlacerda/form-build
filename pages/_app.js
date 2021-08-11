import { ChakraProvider } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Head from 'next/head';

import ThemeApplication from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={ThemeApplication}>
      <DndProvider backend={HTML5Backend}>
        <Head>
          <title>Form Builder</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </DndProvider>
    </ChakraProvider>
  );
}

export default MyApp;
