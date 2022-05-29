import Slider from '../../components/Slider/Slider';
import levels from '../../constants/levels';
import { getImg } from '../../lib/getMedia';
import styles from './ImageGallery.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ImageGallery = ({ birdsData }) => {
  const [questionId, setQuestionId] = useState(2);
  useEffect(() => {
    setQuestionId(1);
  }, []);

  const getQuestionId = (index) => {
    setQuestionId(index + 1);
  };

  const levelsArr = Object.values(levels);
  const elements = levelsArr.map((item, index) => {
    return (
      <div
        className={styles.card}
        key={index}
        onClick={() => getQuestionId(index)}
      >
        <Image
          src={getImg(birdsData, index + 1, 1)}
          width={130}
          height={88}
          alt="bird"
          className={styles.image}
          layout="fixed"
          priority
        />
        <h2 className={styles.levelTitle}>{item}</h2>
      </div>
    );
  });

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Галерея птиц</h1>
        <hr className={styles.hr} />
        <div className={styles.sliderContainer}>
          <div className={styles.levels}>{elements}</div>
          <Slider birdsData={birdsData} questionId={questionId}/>
        </div>
      </div>
    </>
  );
};

ImageGallery.propTypes = {
  birdsData: PropTypes.array,
};

export default ImageGallery;
