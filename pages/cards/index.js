import Head from 'next/head';
import { useEffect, useState } from 'react';

export const getStaticProps = async () => {
  const response = await fetch('https://drzbiexu.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27card%27]');
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
        {cards.map(({ _id, birdName, species }) => (
          <li key={_id}><strong>{birdName}</strong> ({species})</li>
        ))}
      </ul>
    </>
  );
};

export default Cards;