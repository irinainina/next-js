import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Cards = ({ cards }) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return null;
};

export default Cards;