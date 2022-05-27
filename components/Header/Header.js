import Nav from '../Nav/Nav';
import styles from './Header.module.scss';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Header = ({ score, questionId }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.topPanel}>
          <Link href={'/'}>
            <a className={styles.logo}></a>
          </Link>
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
