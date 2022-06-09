import Auth from '../../components/Auth/Auth';
import Footer from '../../components/Footer/Footer';
import video from '../../public/video/video.webm';
import { LangContext } from '../../translation/LangContext';
import styles from './HomePage.module.scss';
import Link from 'next/link';
import { useContext } from 'react';

const HomePage = () => {
  const value = useContext(LangContext);
  const { quiz, quizTitle, game, gallery } = value.dictionary;

  return (
    <>
      <div className={styles.container}>
        <Auth />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{quiz}</h1>
          <h2 className={styles.subTitle}>{quizTitle}</h2>
          <div className={styles.btns}>
            <Link href="/cards/1">
              <a className={styles.btn}>{game}</a>
            </Link>
            <Link href="/gallery">
              <a className={styles.btn}>{gallery}</a>
            </Link>
          </div>
        </div>
        <video autoPlay loop muted src={video} className={styles.video} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
