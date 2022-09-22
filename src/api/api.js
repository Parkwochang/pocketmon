import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit={limit}';
/**
 * @function(@param limit) 포켓몬 api 담아둠
 * @param limit -> 리스트 최대 갯수
 */
export default function pocketmonApiList(limit) {
  let url = URL.replace('{limit}', limit);

  const res = axios(`${url}`);

  return res;
}
