import ImageGallery from '../scenes/ImageGallery/ImageGallery';
import Head from 'next/head';

export const getServerSideProps = async () => {
  const url =
    'https://drzbiexu.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27card%27]';
  const response = await fetch(url);
  const data = await response.json();
  if (!data) {
    return { notFound: true };
  }
  return {
    props: { birdsData: data.result },
  };
};

const GalleryPage = ({birdsData}) => {  
  return (
    <>
      <Head>
        <title>gallery</title>
      </Head>
      <ImageGallery birdsData={birdsData}/>
    </>
  );
};

export default GalleryPage;