import imageSize from '../../constants/imageSize';
import winAudio from '../../public/audio/win.mp3';
import styles from './BirdQuiz.module.scss';
import Image from 'next/image';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const BirdQuiz = ({ birdsData, random, win }) => {
  const birdData = birdsData.filter((el) => el.cardNumber === random)[0];

  const imgKey = birdData.image.asset._ref
    .replace(/image-/, '')
    .replace(/-jpg/, '');
  const imgSrc = `https://cdn.sanity.io/images/drzbiexu/production/${imgKey}.jpg`;

  const audioKey = birdData.audio.asset._ref
    .replace(/file-/, '')
    .replace(/-mp3/, '');
  const audioSrc = `https://cdn.sanity.io/files/drzbiexu/production/${audioKey}.mp3`;

  return (
    <> 
      <div className={styles.birdQuizContainer}>
        <Image
          src={win ? imgSrc : '/img/bird.jpg'}
          width={imageSize.width}
          height={imageSize.height}
          alt="bird"
          className={styles.birdImage}
          layout="fixed"
          priority
        />
        <div className={styles.birdQuizInfo}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <h3 className={styles.birdName}>
                {win ? birdData.birdName : '******'}
              </h3>
            </li>
            <li className={styles.listItem}>
              <AudioPlayer
                src={win ? winAudio : audioSrc}
                className={styles.birdQuizAudio}
                autoplay={false}
                showJumpControls={false}
                customControlsSection={[
                  RHAP_UI.MAIN_CONTROLS,
                  RHAP_UI.VOLUME_CONTROLS,
                ]}
                layout="horizontal-reverse"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BirdQuiz;
