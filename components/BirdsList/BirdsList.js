import { getImg, getAudio, getValue } from '../../lib/getData';
import blankAudio from '../../public/audio/blank.mp3';
import errorAudio from '../../public/audio/error.mp3';
import winAudio from '../../public/audio/win.mp3';
import styles from './BirdsList.module.scss';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

const BirdsList = ({birdsData, questionNum, getCardId, random, win, lang}) => {

  const birdData = birdsData.filter((el) => el.questionNumber == questionNum);

  const player = useRef();
  const playAudio = (cardNumber) => {
    if (win) return;
    if (cardNumber === random) {
      player.current.src = winAudio;
      player.current.play();
    } else {
      player.current.src = errorAudio;
      player.current.play();
    }
  };

  return (
    <>
      <ul className={styles.birdsList}>
        {birdData.map(({ _id, birdNameEN, birdNameRU, birdNameUA, cardNumber }) => (
          <li
            className={styles.listItem}
            key={_id}
            onClick={() => {
              playAudio(cardNumber);
              getCardId(cardNumber);
              event.target.className = win
                ? styles.activeItem
                : cardNumber === random
                ? styles.winItem
                : styles.errorItem;
            }}
          >
            {lang === 'en' ? birdNameEN : lang === 'ru' ? birdNameRU : birdNameUA}
          </li>
        ))}
      </ul>
      <audio src={blankAudio} ref={player}></audio>
    </>
  );
};

BirdsList.propTypes = {
  birdsData: PropTypes.array,
  questionNum: PropTypes.number,
  random: PropTypes.number,
  getCardId: PropTypes.func,
  lang: PropTypes.string,
};

export default BirdsList;
