import LangContext from '../../translation/LangContext';
import styles from './Scoreboard.module.scss';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useContext } from 'react';

const Scoreboard = ({ scores }) => {
  const value = useContext(LangContext);
  const { scoreboard, tryMore } = value.state.languages;

  const transformDate = (date) =>
    date.split('T')[0].split('-').reverse().join('.');
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{scoreboard}</h1>
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
        <a className={styles.btn}>{tryMore}</a>
      </Link>
    </div>
  );
};

Scoreboard.propTypes = {
  scores: PropTypes.array,
};

export default Scoreboard;
