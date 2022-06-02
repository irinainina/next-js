import Form from '../../components/Form/Form';
import winImg from '../../public/img/win.jpg';
import LangContext from '../../translation/LangContext';
import styles from './GameResult.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useContext } from 'react';

const GameResult = ({ score }) => {
  const value = useContext(LangContext);
  const { congratulations, resultPart1, resultPart2 } = value.state.languages;

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.leadText}>{congratulations}</h1>
        <p className={styles.resultText}>
          {resultPart1} {score} {resultPart2}
        </p>
        <hr className={styles.hr} />
        <Image
          src={winImg}
          width={960}
          height={422}
          alt="win"
          placeholder="blur"
        />
        <hr className={styles.hrDark} />
        <Form score={score} />
      </div>
    </>
  );
};

GameResult.propTypes = {
  score: PropTypes.string,
};

export default GameResult;
