import GameResult from '../components/GameResult';
import styles from '../styles/GameResult.module.scss';
import winImg from './../public/img/win.jpg';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GameOver = () => {
  const { asPath } = useRouter();
  const score = asPath.split('?')[1];

  return (
    <>
      <Head>
        <title>result</title>
      </Head>
      <div className={styles.gameOverContainer}>
        <h1 className={styles.leadText}>Поздравляем!</h1>
        <p className={styles.resultText}>
          Вы прошли викторину и набрали {score} из 30 возможных баллов
        </p>
        <hr className={styles.hr} />
        <Image
          src={winImg}
          width={960}
          height={422}
          alt="win"
          placeholder="blur"
        />
        <hr className={styles.hrDark} />
        <GameResult score={score} />
        <Link href="/scoreboard">
          <a className={styles.btn + ' ' + styles.leaderBtn}>Таблица лидеров</a>
        </Link>
      </div>
    </>
  );
};

export default GameOver;
