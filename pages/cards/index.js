import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Cards = ({ cards }) => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return null; 
};

export default Cards;
