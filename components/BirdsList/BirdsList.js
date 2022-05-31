import { getImg, getAudio, getValue } from '../../lib/getData';
import styles from './BirdsList.module.scss';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import blankAudio from '../../public/audio/blank.mp3';
import winAudio from '../../public/audio/win.mp3';
import errorAudio from '../../public/audio/error.mp3';

const BirdsList = ({ birdsData, questionNum, getCardId, random, win }) => {
  const birdData = birdsData.filter(el => el.questionNumber == questionNum);

  const player = useRef();
  const playAudio = (cardNumber) => {
    if(win) return;
    if(cardNumber === random) {
      player.current.src = winAudio;
      player.current.play();
    } else {
      player.current.src = errorAudio;
      player.current.play();
    } 
  }

  return (
    <>
      <ul className={styles.birdsList}>
        {birdData.map(({ _id, birdName, cardNumber }) => (
          <li
            className={styles.listItem}
            key={_id}
            onClick={() => {
              playAudio(cardNumber);
              getCardId(cardNumber);
              if(win) return;
              event.target.className =
                cardNumber === random ? styles.winItem : styles.errorItem;
            }}
          >
            {birdName}
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
};

export default BirdsList;
