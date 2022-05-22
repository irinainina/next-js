import styles from '../styles/GameOwer.module.scss';
import winImg from './../public/img/win.jpg';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GameOver = () => {
  const { asPath } = useRouter();
  const score = asPath.split('?')[1];

  const congratulations = (
    <>
      <Head>
        <title>win</title>
      </Head>
      <h1 className={styles.leadText}>Поздравляем!</h1>
      <p className={styles.resultText}>
        Вы прошли викторину и набрали {score} из 30 возможных баллов
      </p>
      <hr className={styles.hr} />
    </>
  );

  return (
    <div className={styles.gameOverContainer}>
      {congratulations}
      <Image
        src={winImg}
        width={960}
        height={422}
        alt="win"
        placeholder="blur"
      />
      <hr className={styles.hrDark} />
      <Link href="/cards/1">
        <a className={styles.gameOverBtn}>Попробовать еще раз!</a>
      </Link>
    </div>
  );
};

export default GameOver;
