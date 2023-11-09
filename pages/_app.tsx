import type { AppProps } from 'next/app';
import Head from 'next/head';
import TokyoState from '@/src/Context';
import PreLoader from '@/src/layout/PreLoader';
import '@/styles/globals.css';
import SEO from '@/src/components/SEO';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet={'UTF-8'} />
      <meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
      <meta
        name={'viewport'}
        content={'width=device-width, initial-scale=1.0'}
      />
      <meta name={'author'} content={'Anton'} />
    </Head>
    <SEO title={process.env.siteTitle} />
    <TokyoState>
      <PreLoader />
      <Component {...pageProps} />
    </TokyoState>
  </>
);

export default App;
