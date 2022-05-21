import styles from '../styles/BirdsList.module.scss';

const BirdsList = ({ birdsData }) => {
  return (
    <ul className={styles.birdsList}>
      {birdsData.map(({ _id, birdName }) => (
          <li className={styles.listItem} key={_id}>
            {birdName}
          </li>
        ))}
    </ul>
  )
}

export default BirdsList;