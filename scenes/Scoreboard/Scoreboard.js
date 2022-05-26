import styles from './Scoreboard.module.scss';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Scoreboard = ({ scores }) => {
  const transformDate = (date) =>
    date.split('T')[0].split('-').reverse().join('.');
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Таблица лидеров</h1>
      <hr className={styles.hr} />
      <ul className={styles.list}>
        {scores.map(({ _createdAt, _id, name, score }) => (
          <li className={styles.item} key={_id}>
            <span className={styles.date}>{transformDate(_createdAt)}</span>
            <span className={styles.name}>{name}</span>
            <span className={styles.score}>{score}</span>
          </li>
        ))}
      </ul>
      <hr className={styles.hrDark} />
      <Link href="/cards/1">
        <a className={styles.btn}>Попробовать еще раз!</a>
      </Link>
    </div>
  );
};

Scoreboard.propTypes = {
  scores: PropTypes.array
};

export default Scoreboard;
