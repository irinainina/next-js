import Nav from './Nav'
import styles from './../styles/Header.module.scss';

const Header = ({ score = 25 }) => {  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.topPanel}>
          <div className={styles.logo}></div>
          <h5>
            Score: <span className={styles.score}>{score}</span>
          </h5>
        </div>
        <Nav />        
      </div>
    </div>
  );
};

export default Header;