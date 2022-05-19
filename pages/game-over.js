import Head from 'next/head';
import Image from 'next/image';
import winImg from './../public/win.jpg'

const GameOver = ({ score = 30 }) => {
  const congratulations = (
    <>
      <Head>
        <title>Win page</title>
      </Head>
      <h1 className="display-3 text-center">Поздравляем!</h1>
      <p className="lead text-center">
        Вы прошли викторину и набрали {score} из 30 возможных баллов
      </p>
      <hr className="my-4" />
    </>
  );
  if (score === 30) {
    return (
      <div className="jumbotron game-over">
        {congratulations}
        <Image src={winImg} width={960} height={422} alt="win" placeholder="blur" />
      </div>
    );
  } else {
    return (
      <div className="jumbotron game-over">
        {congratulations}
        <button className="btn btn-next btn-game-over">
          Попробовать еще раз!
        </button>
      </div>
    );
  }
};

export default GameOver;