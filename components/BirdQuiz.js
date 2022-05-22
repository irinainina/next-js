import Image from 'next/image';
import styles from '../styles/BirdQuiz.module.scss';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import winAudio from '../public/audio/win.mp3';

const BirdQuiz = ({ birdsData, questionId, win }) => {

  const imgKey = birdsData[questionId].image.asset._ref.replace(/image-/, '').replace(/-jpg/, '');
  const imgSrc = `https://cdn.sanity.io/images/drzbiexu/production/${imgKey}.jpg`;

  const audioKey = birdsData[questionId].audio.asset._ref.replace(/file-/, '').replace(/-mp3/, '');
  const audioSrc = `https://cdn.sanity.io/files/drzbiexu/production/${audioKey}.mp3`;

  return (
  <>
    <div className={styles.birdQuizContainer}>
    <Image 
          src={win ? imgSrc : '/img/bird.jpg'}
          width={200}
          height={155}
          alt="bird"
          className={styles.birdImage}
          layout="fixed"
          priority
        />
      <div className={styles.birdQuizInfo}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h3 className={styles.birdName}>{win ? birdsData[questionId].birdName : '******'}</h3>
          </li>
          <li className={styles.listItem}>
          <AudioPlayer src={win ? winAudio : audioSrc}
            className={styles.birdQuizAudio}
            showJumpControls={false}
            customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS,]}
            customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
            layout="horizontal-reverse"
            />
          </li>
        </ul>
      </div>
    </div>
  </>)
};

export default BirdQuiz;
