import saveResult from '../../lib/mutations';
import LangContext from '../../translation/LangContext';
import styles from './Form.module.scss';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useContext } from 'react';

const Form = ({ score }) => {
  const value = useContext(LangContext);
  const { name, saveResult } = value.state.languages;

  const { data: session } = useSession();
  const router = useRouter();
  const redirect = () => {
    router.push('/scoreboard');
  };

  const [inputValue, setInputValue] = useState(
    session ? session.user.name : ''
  );
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
          placeholder={name}
          maxLength="15"
          value={inputValue}
          onChange={getName}
        />
        <button type="submit" className={styles.btn}>
          {saveResult}
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  score: PropTypes.string,
};

export default Form;
