import styles from './HomePage.module.scss';
import Link from 'next/link';

const HomePage = () => (
  <>
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Викторина</h1>
        <h2 className={styles.subTitle}>«Голоса птиц»</h2>
        <Link href="/cards/1">
          <a className={styles.startBtn}>Начать</a>
        </Link>
      </div>
    </div>
  </>
);

export default HomePage;
