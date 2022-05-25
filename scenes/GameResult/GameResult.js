import Form from '../../components/Form/Form';
import styles from './GameResult.module.scss';
import winImg from '../../public/img/win.jpg';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GameResult = ({score}) => {
  return (
    <>
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
        <Form score={score} />
        <Link href="/scoreboard">
          <a className={styles.btn + ' ' + styles.leaderBtn}>Таблица лидеров</a>
        </Link>
      </div>
    </>
  );
};

export default GameResult;
