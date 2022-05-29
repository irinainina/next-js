const getBirdData = (birdsData, questionId, cardId) => {
  const birdData = birdsData.filter(
    (el) => el.questionNumber == questionId && el.cardNumber == cardId
  );
  return birdData;
}

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

export const getName = (birdsData, questionId, cardId) => { 
  const birdData = getBirdData(birdsData, questionId, cardId);
  const name = birdData[0].birdName;  
  return name;
};

export const getSpecies = (birdsData, questionId, cardId) => { 
  const birdData = getBirdData(birdsData, questionId, cardId);
  const species = birdData[0].species;
  return species;
};

export const getDescription = (birdsData, questionId, cardId) => { 
  const birdData = getBirdData(birdsData, questionId, cardId);
  const description = birdData[0].description;
  return description;
};

