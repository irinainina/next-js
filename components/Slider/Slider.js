import levels from '../../constants/levels';
import { getImg, getAudio, getName, getSpecies, getDescription} from '../../lib/getMedia';
import blankAudio from '../../public/audio/blank.mp3';
import styles from './Slider.module.css';
import Image from 'next/image';
import { StyleSheet, useState } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { StackedCarousel } from 'react-stacked-carousel';
import 'react-stacked-carousel/dist/index.css';

const Slider = ({ birdsData, questionId }) => {

  const [card, setCard] = useState(null);
  const onCardChange = (event) => {
    console.log('Card', event);
  };

  const levelsArr = Object.values(levels);
  const cardsId = [1, 2, 3, 4, 5, 6];

  const slides = cardsId.map((cardId, index) => {
    return (
      <div key={`child${cardId}`}>
        <div className={styles.level}>{levelsArr[questionId - 1]}</div>
        <div className={styles.birdInfo}>
          <div className={styles.cardNum}>{`${cardId}.`}</div>
          <h2 className={styles.birdName}>
            {getName(birdsData, questionId, cardId)}
          </h2>
          <p className={styles.hyphen}>—</p>
          <p className={styles.species}>
            {getSpecies(birdsData, questionId, cardId)}
          </p>
        </div>
        <Image
          src={getImg(birdsData, questionId, cardId)}
          width={500}
          height={280}
          alt="bird"
          className={styles.image}
          layout="fixed"
          priority
        />
        <p className={styles.description}>
          {getDescription(birdsData, questionId, cardId)}
        </p>
        <AudioPlayer
          src={getAudio(birdsData, questionId, cardId)}
          className={styles.audio}
          autoPlayAfterSrcChange={false}
          showJumpControls={false}
          customControlsSection={[
            RHAP_UI.MAIN_CONTROLS,
            RHAP_UI.VOLUME_CONTROLS,
          ]}
          layout="horizontal-reverse"
        />
      </div>
    );
  });

  return (
    <div className={styles.main}>
      <StackedCarousel
        autoRotate={false}
        onCardChange={onCardChange}
        containerClassName={styles.container}
        cardClassName={styles.card}
        leftButton={<button className={styles.btn}>{'‹'}</button>}
        rightButton={<button className={styles.btn}>{'›'}</button>}
      >
        {slides}
      </StackedCarousel>
    </div>
  );
};
export default Slider;