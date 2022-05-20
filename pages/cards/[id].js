import Head from "next/head";
import CardInfo from "../../components/CardInfo";

export const getServerSideProps = async (context) => {
  const {id} = context.params;
  const url = 'https://drzbiexu.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27card%27]';
  const response = await fetch(url);
  const data = await response.json();
  if (!data) {return {notFound: true}}
  console.log(data.result.filter(el => el._id === id));
  return {props: {card: data.result.filter(el => el._id === id)[0]}}
};

const Card = ({ card }) => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <CardInfo card={card} />
  </>
);

export default Card;