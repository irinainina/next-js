import Image from 'next/image';
import styles from '../styles/BirdInfo.module.scss';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const BirdInfo = ({ birdsData, cardId }) => {
  if(!cardId) {
    return (
    <div className={styles.birdsInfoContainer}>
      <div className={styles.birdDetails}>
        <p className={styles.instruction}>
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </p>
      </div>
    </div>
  )} else {  
    const birdData = birdsData.filter(el => el.cardNumber === +cardId)[0];
   
    const imgKey = birdData.image.asset._ref.replace(/image-/, '').replace(/-jpg/, '');
    const imgSrc = `https://cdn.sanity.io/images/drzbiexu/production/${imgKey}.jpg`;
  
    const audioKey = birdData.audio.asset._ref.replace(/file-/, '').replace(/-mp3/, '');
    const audioSrc = `https://cdn.sanity.io/files/drzbiexu/production/${audioKey}.mp3`;
  
    return (
      <div className={styles.birdsInfoContainer}>
        <div className={styles.birdDetails}>
          <div className={styles.cardBody}>
          <Image 
            src={imgSrc}
            width={200}
            height={155}
            alt="bird"
            className={styles.birdImage}
            layout="fixed"
            priority
          />
            <ul className={styles.listGroup}>
              <li className={styles.listGroupItem}>
                <h4 className={styles.birdName}>{birdData.birdName}</h4>
              </li>
              <li className={styles.listGroupItem}>
                <p className={styles.birdSpecies}>{birdData.species}</p>
              </li>
              <li className={styles.listGroupItem}>
              <AudioPlayer src={audioSrc}
                className={styles.audio}
                showJumpControls={false}
                customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
                customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
                layout="horizontal-reverse"
              />
              </li>
            </ul>
          </div>
          <span className={styles.birdDescription}>
            {birdData.description}
          </span>
        </div>
      </div>
    );
  } 
};

export default BirdInfo;