import Head from "next/head";
import { useState } from 'react';
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

  const [ random, setRandom ] = useState(getRandomQuestion());
  const [ cardId, setCardId ] = useState(0);
  const [ questionId, setQuestionId ] = useState(1);
  const [ win, setWin ] = useState(false);
  const [ score, setScore ] = useState(0);

  return (<>
    <Head>
      <title>quiz</title>
    </Head>
    <Header score={score}/>
    <div className={styles.container}>
      <BirdQuiz birdsData={birdsData} 
        questionId={questionId}
        win={win}/>
      <div className={styles.wrap}>
        <BirdsList birdsData={birdsData}
          win={win}
          getCardId={(cardNumber) => setCardId(cardNumber)}
        />
        <BirdInfo birdsData={birdsData}
          cardId={cardId}
         />
      </div>
    </div>
  </>)
};

export default Card;