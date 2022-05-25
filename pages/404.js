import Page404 from '../scenes/Page404/Page404';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>error</title>
      </Head>
      <Page404 />
    </>
  );
};

export default Error;
