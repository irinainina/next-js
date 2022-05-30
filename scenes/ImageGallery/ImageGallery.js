import Slider from '../../components/Slider/Slider';
import levels from '../../constants/levels';
import { getImg } from '../../lib/getData';
import styles from './ImageGallery.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ImageGallery = ({ birdsData }) => {
  const [questionId, setQuestionId] = useState(1);
  const [audioId, setAudioId] = useState(2);
  useEffect(() => {
    setAudioId(1);
  }, []);

  const getQuestionId = (index) => {
    setQuestionId(index + 1);
    setAudioId(index + 1);
  };

  const levelsArr = Object.values(levels);
  const elements = levelsArr.map((item, index) => {
    return (
      <div
        className={styles.pageItem}
        key={index}
        style={{
          backgroundImage: `url(${getImg(birdsData, index + 1, 1)})`,
        }}
        onClick={() => getQuestionId(index)}
      >
        <h2
          className={
            index + 1 == questionId ? styles.pageLinkActive : styles.pageLink
          }
        >
          {item}
        </h2>
      </div>
    );
  });

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Галерея птиц</h1>
        <hr className={styles.hr} />
        <div className={styles.sliderContainer}>
          <div className={styles.pagination}>{elements}</div>
          <Slider
            birdsData={birdsData}
            questionId={questionId}
            audioId={audioId}
          />
        </div>
      </div>
    </>
  );
};

ImageGallery.propTypes = {
  birdsData: PropTypes.array,
};

export default ImageGallery;
