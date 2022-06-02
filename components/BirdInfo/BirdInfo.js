import imageSize from '../../constants/imageSize';
import { getImg, getAudio, getValue } from '../../lib/getData';
import styles from './BirdInfo.module.scss';
import Image from 'next/image';
import PropTypes from 'prop-types';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import LangContext from '../../translation/LangContext';
import { useContext } from 'react';

const BirdInfo = ({ birdsData, questionNum, cardId, lang }) => {
  const value = useContext(LangContext);
  const { listenPlayer, selectBird } = value.state.languages;

  if (cardId) {
    const imgSrc = getImg(birdsData, questionNum, cardId);
    const audioSrc = getAudio(birdsData, questionNum, cardId);
    const birdName = getValue(birdsData, questionNum, cardId, 'birdName', lang);
    const species = getValue(birdsData, questionNum, cardId, 'species', lang);
    const description = getValue(birdsData, questionNum, cardId, 'description', lang);

    return (
      <div className={styles.birdsInfoContainer}>
        <div className={styles.birdDetails}>
          <div className={styles.cardBody}>
            <Image
              src={imgSrc}
              width={imageSize.width}
              height={imageSize.height}
              alt="bird"
              className={styles.birdImage}
              layout="fixed"
              priority
            />
            <ul className={styles.listGroup}>
              <li className={styles.listGroupItem}>
                <h4 className={styles.birdName}>{birdName}</h4>
              </li>
              <li className={styles.listGroupItem}>
                <p className={styles.birdSpecies}>{species}</p>
              </li>
              <li className={styles.listGroupItem}>
                <AudioPlayer
                  src={audioSrc}
                  className={styles.audio}
                  autoPlayAfterSrcChange={false}
                  showJumpControls={false}
                  customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
                  customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
                  layout="horizontal-reverse"
                />
              </li>
            </ul>
          </div>
          <span className={styles.birdDescription}>{description}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.birdsInfoContainer}>
        <div className={styles.birdDetails}>
          <p className={styles.instruction}>
            <span>{listenPlayer}</span>
            <span>{selectBird}</span>
          </p>
        </div>
      </div>
    );
  }
};

BirdInfo.propTypes = {
  birdsData: PropTypes.array,
  questionNum: PropTypes.number,
  cardId: PropTypes.number,
  lang: PropTypes.string,
};

export default BirdInfo;
