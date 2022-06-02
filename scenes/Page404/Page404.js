import LangContext from '../../translation/LangContext';
import styles from './Page404.module.scss';
import Image from 'next/image';
import { useContext } from 'react';

const Page404 = () => {
  const value = useContext(LangContext);
  const { error } = value.state.languages;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>{error}</h2>
        <Image src="/img/404.png" width={270} height={170} alt="404" />
      </div>
    </>
  );
};

export default Page404;
