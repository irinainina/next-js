import imageSize from '../../constants/imageSize';
import { useRef } from 'react';
import styles from './BirdQuiz.module.scss';
import Image from 'next/image';
import PropTypes from 'prop-types';
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

  const player = useRef();
  const pauseAudio = () => {
      player.current.audio.current.pause();
  }

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
                src={audioSrc}
                ref={player}
                onPlay={win ? pauseAudio() : ''}
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

BirdQuiz.propTypes = {
  birdsData: PropTypes.array,
  random: PropTypes.number,
  win: PropTypes.bool,
};

export default BirdQuiz;
