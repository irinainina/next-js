import BirdInfo from '../../components/BirdInfo/BirdInfo';
import BirdQuiz from '../../components/BirdQuiz/BirdQuiz';
import BirdsList from '../../components/BirdsList/BirdsList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Questions from '../../components/Questions/Questions';
import styles from './card.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const url =
    'https://drzbiexu.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27card%27]';
  const response = await fetch(url);
  const data = await response.json();
  if (!data) {
    return { notFound: true };
  }
  return {
    props: { birdsData: data.result, questionNum: +id },
  };
};

const Card = ({ birdsData, questionNum }) => {
  const getRandomQuestion = () => Math.floor(Math.random() * 6 + 1);

  const [random, setRandom] = useState(1);
  const [cardId, setCardId] = useState(0);
  const [questionId, setQuestionId] = useState(1);
  const [win, setWin] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setRandom(getRandomQuestion());
  }, []);

  const getCardId = (cardNumber) => {
    setCardId(cardNumber);
    setAttempts((attempts) => attempts + 1);
    if (random === cardNumber) {
      setWin(true);
      setScore((score) => score + 5 - attempts);
      setQuestionId((questionId) => questionId + 1);
    }
  };

  const getNextLevel = () => {
    setWin(false);
    setCardId(0);
    setAttempts(0);
  };

  return (
    <>
      <Head>
        <title>quiz</title>
      </Head>
      <Questions score={score} questionId={questionId} />
      <div className={styles.container}>
        <BirdQuiz 
          birdsData={birdsData}
          questionNum={questionNum}
          random={random} 
          win={win}
        />
        <div className={styles.wrap}>
          <BirdsList
            birdsData={birdsData}
            questionNum={questionNum}
            random={random}
            win={win}
            getCardId={(cardNumber) => getCardId(cardNumber)}
          />
          <BirdInfo 
            birdsData={birdsData}
            questionNum={questionNum}
            cardId={cardId} 
          />
        </div>
        <Link href={questionId < 7 ? `/cards/${questionId}` : `/game-over?${score}`}>
          <a
            className={win ? styles.btnActive : styles.btn}
            onClick={() => getNextLevel()}
          >
            Next Level
          </a>
        </Link>
      </div>
    </>
  );
};

Card.propTypes = {
  birdsData: PropTypes.array,
  questionNum: PropTypes.number
};

export default Card;
