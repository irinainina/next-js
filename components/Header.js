import Link from 'next/link';
import Nav from './Nav'
import styles from '../styles/Header.module.scss';

const Header = ({ score }) => {  
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
        <Nav />        
      </div>
    </div>
  );
};

export default Header;