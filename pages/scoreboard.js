import styles from '../styles/ScoreBoard.module.scss';
import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
  const url =
    'https://drzbiexu.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27scores%27]';
  const response = await fetch(url);
  const data = await response.json();
  if (!data) {
    return { notFound: true };
  }
  return {
    props: { scores: data.result.sort((a, b) => (a.score < b.score ? 1 : -1)) },
  };
};

const ScoreBoard = ({ scores }) => {
  const transformDate = (date) =>
    date.split('T')[0].split('-').reverse().join('.');

  return (
    <div className={styles.gameOverContainer}>
      <Head>
        <title>scoreboard</title>
      </Head>
      <h1 className={styles.leadText}>Таблица лидеров</h1>
      <hr className={styles.hr} />
      <ul className={styles.scoreList}>
        {scores.map(({ _createdAt, _id, name, score }) => (
          <li className={styles.listItem} key={_id}>
            <span className={styles.date}>{transformDate(_createdAt)}</span>
            <span className={styles.name}>{name}</span>
            <span className={styles.score}>{score}</span>
          </li>
        ))}
      </ul>
      <hr className={styles.hrDark} />
      <Link href="/cards/1">
        <a className={styles.gameOverBtn}>Попробовать еще раз!</a>
      </Link>
    </div>
  );
};

export default ScoreBoard;
