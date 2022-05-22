import {useState} from 'react';
import styles from '../styles/BirdsList.module.scss';

const BirdsList = ({ birdsData, getCardId, random }) => {
  
  
  return (
    <ul className={styles.birdsList}>
      {birdsData.map(({ _id, birdName, cardNumber }) => (
          <li className={styles.listItem} 
            key={_id}
            onClick={() => {getCardId(cardNumber);
            event.target.className=(cardNumber === random ? styles.winItem : styles.errorItem)}} >
            {birdName}
          </li>
        ))}
    </ul>
  )
}

export default BirdsList;