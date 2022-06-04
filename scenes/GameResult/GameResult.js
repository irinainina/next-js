import Form from '../../components/Form/Form';
import winImg from '../../public/img/win.jpg';
import { LangContext } from '../../translation/LangContext';
import styles from './GameResult.module.scss';
import { FacebookShareButton, FacebookIcon, RedditShareButton, RedditIcon, TelegramShareButton, TelegramIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon } from 'next-share';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useContext } from 'react';

const GameResult = ({ score }) => {
  const value = useContext(LangContext);
  const { congratulations, resultPart1, resultPart2, resultPart3, shareResult } = value.dictionary;

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.leadText}>{congratulations}</h1>
        <p className={styles.resultText}>
          {resultPart1} {score} {resultPart3}
        </p>
        <p className={styles.resultText}>
          {shareResult}
        </p>
        <div className={styles.shareBtnContainer}>
        <FacebookShareButton
          url={'https://next-js-gamma-nine.vercel.app/'}
          quote={`${resultPart2}${score}${resultPart3}`}
          hashtag={'#songbird'}>
          <FacebookIcon size={48} round />
        </FacebookShareButton>
        <RedditShareButton
          url={'https://next-js-gamma-nine.vercel.app/'}
          quote={`${resultPart2}${score}${resultPart3}`}
          hashtag={'#songbird'}>
          <RedditIcon size={48} round />
        </RedditShareButton>
        <TelegramShareButton
          url={'https://next-js-gamma-nine.vercel.app/'}
          quote={`${resultPart2}${score}${resultPart3}`}
          hashtag={'#songbird'}>
          <TelegramIcon size={48} round />
        </TelegramShareButton>
        <TwitterShareButton
          url={'https://next-js-gamma-nine.vercel.app/'}
          quote={`${resultPart2}${score}${resultPart3}`}
          hashtag={'#songbird'}>
          <TwitterIcon size={48} round />
        </TwitterShareButton>
        <PinterestShareButton
          url={'https://next-js-gamma-nine.vercel.app/'}
          quote={`${resultPart2}${score}${resultPart3}`}
          hashtag={'#songbird'}>
          <PinterestIcon size={48} round />
        </PinterestShareButton>
        </div>
        <hr className={styles.hr} />
        <Image
          src={winImg}
          width={960}
          height={340}
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
