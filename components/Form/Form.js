import saveResult from '../../lib/mutations';
import styles from './Form.module.scss';
import { useRouter } from 'next/router';
import { useState } from 'react';

const GameResult = ({ score }) => {
  const router = useRouter();
  const redirect = () => {
    router.push('/scoreboard');
  };

  const [inputValue, setInputValue] = useState('');
  const getName = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    saveResult(inputValue, score, redirect);
  };

  return (
    <>
      <form className={styles.form} onSubmit={() => onSubmit(event)}>
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
