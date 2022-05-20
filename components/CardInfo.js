const CardInfo = ({ card }) => {
  const { birdName } = card || {};

  if (!card) {
    return <h3>Empty card</h3>
  }

  return (
    <>
      <h3>{birdName}</h3>
    </>    
  );
}

export default CardInfo;
