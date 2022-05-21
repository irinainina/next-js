import Image from 'next/image';
import styles from '../styles/BirdQuiz.module.scss';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import winAudio from '../public/audio/win.mp3';

const BirdQuiz = ({ random = 1, win = false }) => (
  <>
    <div className={styles.birdQuizContainer}>
      <Image
        src={win ? '' : '/img/bird.jpg'}
        width={200}
        height={155}
        alt="bird"
        className={styles.birdImage}
        priority
      />
      <div className={styles.birdQuizInfo}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h3 className={styles.birdName}>{win ? '' : '******'}</h3>
          </li>
          <li className={styles.listItem}>
            <AudioPlayer src={winAudio}
            className={styles.audio}
            showJumpControls={false}
            customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS,]}
            layout="horizontal-reverse"
            />
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default BirdQuiz;
