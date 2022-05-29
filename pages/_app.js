import '../styles/globals.scss';
import Layout from '../components/Layout'
import { SessionProvider } from 'next-auth/react';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <SessionProvider session={pageProps.session}>
    {router.pathname !== "/" ? (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    ) : (
      <Component {...pageProps} />
    )}
    </SessionProvider>
  );
}

export default MyApp;
