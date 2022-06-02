import LangContext from '../../translation/LangContext';
import Nav from '../Nav/Nav';
import styles from './Questions.module.scss';
import PropTypes from 'prop-types';
import { useContext } from 'react';

const Questions = ({ score, questionId }) => {
  const value = useContext(LangContext);
  const { scoreText } = value.state.languages;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.topPanel}>
          <h5 className={styles.scoreName}>
            {scoreText} <span className={styles.score}>{score}</span>
          </h5>
        </div>
        <Nav questionId={questionId} />
      </div>
    </div>
  );
};

Questions.propTypes = {
  score: PropTypes.number,
  questionId: PropTypes.number,
};

export default Questions;
