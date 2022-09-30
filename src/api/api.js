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
//호이스팅과 / 스코프 문제

// export const api = function () {
//   let result = [];
//   const se = async function () {
//     result = await axios(URL).then((res) => res.data.results);
//     return result;
//   };
//   se();
//   return result;
// };

// export const api2 = () => {
//   const res = axios('https://pokeapi.co/api/v2/pokemon?limit=1017').then((res) => res);
//   console.log(res, 'res');
// };

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
