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
