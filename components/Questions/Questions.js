import Nav from '../Nav/Nav';
import styles from './Questions.module.scss';
import PropTypes from 'prop-types';

const Header = ({ score, questionId }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.topPanel}>
          <h5 className={styles.scoreName}>
            Score: <span className={styles.score}>{score}</span>
          </h5>
        </div>
        <Nav questionId={questionId} />
      </div>
    </div>
  );
};

Header.propTypes = {
  score: PropTypes.number,
  questionId: PropTypes.number
};

export default Header;
