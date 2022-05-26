import imageSize from '../../constants/imageSize';
import styles from './ImageGallery.module.scss';
import PropTypes from 'prop-types';
import Image from 'next/image';

const ImageGallery = ({birdsData}) => {
  const birdData = birdsData[0];

  const imgKey = birdData.image.asset._ref
    .replace(/image-/, '')
    .replace(/-jpg/, '');
  const imgSrc = `https://cdn.sanity.io/images/drzbiexu/production/${imgKey}.jpg`;

  return (
    <div className={styles.container}>   
        <Image
          src={imgSrc}
          width={imageSize.width}
          height={imageSize.height}
          alt="bird"
          className={styles.image}
          layout="fixed"
          priority
        />
    </div>
  );
};

ImageGallery.propTypes = {
  score: PropTypes.number,
  questionId: PropTypes.number
};

export default ImageGallery;