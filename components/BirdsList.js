import {useState} from 'react';
import styles from '../styles/BirdsList.module.scss';

const BirdsList = ({ birdsData, getCardId, win }) => {
  
  return (
    <ul className={styles.birdsList}>
      {birdsData.map(({ _id, birdName, cardNumber }) => (
          <li className={styles.listItem} 
            key={_id}
            onClick={() => getCardId(cardNumber)} >
            {birdName}
          </li>
        ))}
    </ul>
  )
}

export default BirdsList;