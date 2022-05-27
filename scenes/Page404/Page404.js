import styles from './Page404.module.scss';
import Image from 'next/image';

const Page404 = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Something is going wrong...</h2>
        <Image src="/img/404.png" width={270} height={170} alt="404" />
      </div>
    </>
  ); 
};

export default Page404;
