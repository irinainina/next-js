import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/404.module.scss';

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
      <div className={styles.container}>
        <h2 className={styles.title}>Something is going wrong...</h2>
        <Image src="/img/404.png" width={270} height={170} alt="404" />
      </div>      
    </>
  );
};

export default Error;