import Image from 'next/image';
import styles from '../styles/BirdInfo.module.scss';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const BirdInfo = ({ birdsData, random=1, select=true }) => {
  const styleItem = {
    display: select ? 'flex' : 'none',
  };
  const styleInstruction = {
    display: select ? 'none' : 'block',
  };

  const imgKey = birdsData[random].image.asset._ref.replace(/image-/, '').replace(/-jpg/, '');
  const imgSrc = `https://cdn.sanity.io/images/drzbiexu/production/${imgKey}.jpg`;

  const audioKey = birdsData[random].audio.asset._ref.replace(/file-/, '').replace(/-mp3/, '');
  const audioSrc = `https://cdn.sanity.io/files/drzbiexu/production/${audioKey}.mp3`;

  return (
    <div className={styles.birdsInfoContainer}>
      <div className={styles.birdDetails}>
        <p className={styles.instruction} style={styleInstruction}>
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </p>
        <div className={styles.cardBody} style={styleItem}>
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
              <h4 className={styles.birdName}>{birdsData[random].birdName}</h4>
            </li>
            <li className={styles.listGroupItem}>
              <p className={styles.birdSpecies}>{birdsData[random].species}</p>
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
        <span className={styles.birdDescription} style={styleItem}>
          {birdsData[random].description}
        </span>
      </div>
    </div>
  );
};

export default BirdInfo;
