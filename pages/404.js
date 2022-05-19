import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

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
        <title>Error page</title>
      </Head>
      <h2>Something is going wrong...</h2>
      <Image src="/404.png" width={270} height={170} alt="404" />
    </>
  );
};

export default Error;