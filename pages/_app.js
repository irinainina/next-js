import '../styles/bootstrap.min.scss';
import '../styles/globals.scss';
import Layout from '../components/Layout';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <>
      {router.pathname !== "/404" && router.pathname !== '/game-over' ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}


export default MyApp;