import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1017';
/**
 * @function(@param limit) 포켓몬 api 담아둠
 * @param limit -> 리스트 최대 갯수
 */

// 받아온 limit offset
export default async function pocketmonApiList() {
  const res = await axios(URL);
  return res;
}

let result = [];
export const api = () => {
  se();
  async function se() {
    result = await axios(URL).then((res) => res.data.results);
    return result;
  }
  return result;
};

export const api2 = () => {
  let result2 = [];
  (async () => {
    result2 = await axios(URL).then((res) => res.data.results);
    // return result2;
  })();
  return result2;
};

/* export default async function pocketmonApiListMinsub() {
  const res = await axios(URL, {
    transformResponse: [
      function (data) {
        let results = JSON.parse(data).results;
        let Arr = [];

        results.map((res) => axios(res.url).then((res) => Arr.push(res.data)));

        return data;
      },
    ],
  });
  return res;
} */
