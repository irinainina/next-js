import styles from './HomePage.module.scss';
import Link from 'next/link';

const HomePage = () => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Викторина</h1>
      <h2 className={styles.subTitle}>«Голоса птиц»</h2>
      <Link href="/cards/1">
        <a className={styles.btn}>Начать</a>
      </Link>
    </div>
    <video autoPlay loop muted
      src={require('../../public/video/video.webm')}
      poster={'/video/poster.png'}
      className={styles.video}
    />
  </div>
);

export default HomePage;
