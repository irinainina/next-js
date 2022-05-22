import Head from "next/head";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import BirdsList from "../../components/BirdsList";
import BirdQuiz from "../../components/BirdQuiz";
import BirdInfo from "../../components/BirdInfo";
import styles from '../../styles/Card.module.scss';

export const getServerSideProps = async (context) => {
  const {id} = context.params;
  const url = 'https://drzbiexu.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27card%27]';
  const response = await fetch(url);
  const data = await response.json();
  if (!data) {return {notFound: true}}
  return {props: {birdsData: data.result.filter(el => el.questionNumber === +id)}}
};

const Card = ({ birdsData }) => {

  const getRandomQuestion = () => Math.floor(Math.random() * 6 + 1);

  const [ random, setRandom ] = useState(1);
  const [ cardId, setCardId ] = useState(0);
  const [ questionId, setQuestionId ] = useState(1);
  const [ win, setWin ] = useState(false);
  const [ score, setScore ] = useState(0);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setRandom(getRandomQuestion());
  }, [])

  const getCardId = (cardNumber) => {
    setCardId(cardNumber);
    setAttempts(attempts => attempts + 1);
    if(random === cardNumber) {
      setWin(true);
      setScore(score => score + 5 - attempts);
      setQuestionId(questionId => questionId + 1);
    }
  }

  const getNextLevel = () => {
    setWin(false);
    setCardId(0);
    setAttempts(0);
    setRandom(getRandomQuestion());
  }

  return (<>
    <Head>
      <title>quiz</title>
    </Head>
    <Header score={score}
      questionId={questionId}/>
    <div className={styles.container}>
      <BirdQuiz birdsData={birdsData} 
        random={random}
        win={win}/>
      <div className={styles.wrap}>
        <BirdsList birdsData={birdsData}
          random={random}
          getCardId={(cardNumber) => getCardId(cardNumber)}
        />
        <BirdInfo birdsData={birdsData}
          cardId={cardId}
         />
      </div>
      <Link href={questionId < 7 ? `/cards/${questionId}` : `/game-over?${score}`}>
        <a className={win ? styles.btnActive : styles.btn}
          onClick={() => getNextLevel()}>
          Next Level
        </a>
      </Link>
    </div>
  </>)
};

export default Card;