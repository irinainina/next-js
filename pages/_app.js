import Layout from '../components/Layout/Layout';
import '../styles/globals.scss';
import { LangProvider } from '../translation/LangContext';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <SessionProvider session={pageProps.session}>
      <LangProvider>
        {router.pathname !== '/' ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </LangProvider>
    </SessionProvider>
  );
}

export default MyApp;
