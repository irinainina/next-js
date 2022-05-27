import Page404 from '../scenes/Page404/Page404';
import Head from 'next/head';
import useRedirect from '../hooks/useRedirect';

const Error = () => {  
  useRedirect();
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
