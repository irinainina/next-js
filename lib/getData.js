const getBirdData = (birdsData, questionId, cardId) => {
  const birdData = birdsData.filter(
    (el) => el.questionNumber == questionId && el.cardNumber == cardId
  );
  return birdData;
};

export const getImg = (birdsData, questionId, cardId) => {
  const birdData = getBirdData(birdsData, questionId, cardId);
  const imgKey = birdData[0].image.asset._ref
    .replace(/image-/, '')
    .replace(/-jpg/, '');
  const imgSrc = `https://cdn.sanity.io/images/drzbiexu/production/${imgKey}.jpg`;
  return imgSrc;
};

export const getAudio = (birdsData, questionId, cardId) => {
  const birdData = getBirdData(birdsData, questionId, cardId);
  const audioKey = birdData[0].audio.asset._ref
    .replace(/file-/, '')
    .replace(/-mp3/, '');
  const audioSrc = `https://cdn.sanity.io/files/drzbiexu/production/${audioKey}.mp3`;
  return audioSrc;
};

export const getValue = (birdsData, questionId, cardId, value) => {
  const birdData = getBirdData(birdsData, questionId, cardId);
  const valueData = birdData[0][value];
  return valueData;
};
