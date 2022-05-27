import uuid from 'react-uuid';

const saveResult = async (inputValue, score, fn) => {  
  if(!inputValue) return;
  const url =
  'https://drzbiexu.api.sanity.io/v2021-06-07/data/mutate/production';
  const mutations = [
    {
      createOrReplace: {
        _id: uuid(),
        _type: 'scores',
        name: inputValue,
        score: +score,
      },
    },
  ];

  const response = await fetch(url, {
    method: 'post',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ mutations }),
  });
  const result = await response.json();
  if(result) {
    fn();
  }
};

export default saveResult;