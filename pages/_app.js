import Layout from '../components/Layout/Layout';
import '../styles/globals.scss';
import LangContext from '../translation/LangContext';
import dictionary from '../translation/dictionary';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [lang, setLang] = useState('en');

  const provider = {
    state: {
      languages: dictionary[lang],
      lang: lang,
    },
    setLang: setLang, 
  };

  return (
    <LangContext.Provider value={provider}>
      <SessionProvider session={pageProps.session}>
        {router.pathname !== '/' ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </LangContext.Provider>
  );
}

export default MyApp;
