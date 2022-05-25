import Scoreboard from '../scenes/Scoreboard/Scoreboard';
import Head from 'next/head';
import Link from 'next/link';

export const getServerSideProps = async () => {
  const url =
    'https://drzbiexu.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27scores%27]';
  const response = await fetch(url);
  const data = await response.json();
  if (!data) {
    return { notFound: true };
  }
  return {
    props: { scores: data.result.sort((a, b) => (a.score < b.score ? 1 : -1)) },
  };
};

const ScoreBoard = ({ scores }) => {
  return (
    <>
      <Head>
        <title>scoreboard</title>
      </Head>
      <Scoreboard scores={scores}/>
    </>
  );
};

export default ScoreBoard;
