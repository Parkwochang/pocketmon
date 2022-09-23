import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit={limit}&offset={offset}';
/**
 * @function(@param limit) 포켓몬 api 담아둠
 * @param limit -> 리스트 최대 갯수
 */
export default async function pocketmonApiList(limit, offset) {
  let url = URL.replace('{limit}', limit).replace('{offset}', offset);

  const res = await axios(url).then((res) => res.data.results);
  console.log(res, 'resres');
  return res;
}
