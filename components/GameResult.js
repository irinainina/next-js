import styles from '../styles/GameResult.module.scss';
import { useState } from 'react';
import uuid from 'react-uuid';

const GameResult = ({ score }) => {
  const [inputValue, setInputValue] = useState('');

  const getName = (event) => {
    setInputValue(event.target.value);
  };

  const saveResult = async (event) => {
    event.preventDefault();
    if(!inputValue) return;
    
    const mutations = [
      {
        createOrReplace: {
          _id: uuid(),
          _type: 'scores',
          name: inputValue,
          score: +score,
        },
      },
    ];

    fetch(`https://drzbiexu.api.sanity.io/v2021-06-07/data/mutate/production`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ mutations }),
    })
      .then((response) => response.json())
      .then((result) => {setInputValue(inputValue => '');
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <form className={styles.form} onSubmit={saveResult}>
        <input
          type="text"
          className={styles.input}
          placeholder="Ваше имя"
          maxLength="15"
          value={inputValue}
          onChange={getName}
        />
        <button type="submit" className={styles.btn}>
          Сохранить результат
        </button>
      </form>
    </>
  );
};

export default GameResult;
