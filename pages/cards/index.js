import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const getStaticProps = async () => {
  const url = 'https://drzbiexu.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27card%27]';
  const response = await fetch(url);
  const data = await response.json();
  if (!data) {return {notFound: true}}
  return {props: {cards: data.result}}
};

const Cards = ({ cards }) => {
  return (
    <>
      <Head>
        <title>Game page</title>
      </Head>
      <h1>Cards list:</h1>
      <ul>      
        {cards.map(({ _id, questionNumber, cardNumber, birdName, species }) => (
          <li key={_id}>
            <Link href={`/cards/${_id}`}>{birdName}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cards;