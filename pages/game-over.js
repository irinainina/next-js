import Form from '../components/Form/Form';
import GameResult from '../scenes/GameResult/GameResult';
import Head from 'next/head';
import { useRouter } from 'next/router';

const GameOver = () => {
  const { asPath } = useRouter();
  const score = asPath.split('?')[1];

  return (
    <>
      <Head>
        <title>result</title>
      </Head>
      <GameResult score={score} />
    </>
  );
};

export default GameOver;
