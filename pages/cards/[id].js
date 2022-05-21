import Head from "next/head";
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

const Card = ({ birdsData }) => (
  <>
    <Head>
      <title>quiz</title>
    </Head>
    <Header />
    <div className={styles.container}>
      <BirdQuiz />
      <div className={styles.wrap}>
        <BirdsList birdsData={birdsData} />
        <BirdInfo birdsData={birdsData} />
      </div>
    </div>
  </>
);

export default Card;