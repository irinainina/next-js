import Auth from '../../components/Auth/Auth';
import Footer from '../../components/Footer/Footer';
import styles from './HomePage.module.scss';
import Link from 'next/link';

const HomePage = () => (
  <>
    <div className={styles.container}>
      <Auth />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Викторина</h1>
        <h2 className={styles.subTitle}>«Голоса птиц»</h2>
        <div className={styles.btns}>
          <Link href="/cards/1">
            <a className={styles.btn}>Игра</a>
          </Link>
          <Link href="/gallery">
            <a className={styles.btn}>Галерея</a>
          </Link>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        src={require('../../public/video/video.webm')}
        className={styles.video}
      />
    </div>
    <Footer />
  </>
);

export default HomePage;
