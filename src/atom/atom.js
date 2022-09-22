import axios from 'axios';
import { atom, selector, selectorFamily } from 'recoil';
import pocketmonApiList from '../api/api';

// NOTE ::

export const pocket = atom({
  key: 'pocketMonster',
  default: '',
});

// NOTE ::

export const search = atom({
  key: 'pocketmonSearch',
  default: '1',
});

// NOTE :: 포켓몬 리스트
export const pocketListState = atom({
  key: 'pocketListStates',
  default: {
    loading: false,
    data: [],
    error: null,
  },
});

// export const loading = atom({
//   key: 'loading',
//   default: false,
// });

export const pocketListApi = selectorFamily({
  key: 'pocketListState',
  get:
    (limit) =>
    async ({ get }) => {
      const res = await pocketmonApiList(limit).then((res) => res.data.results);
      try {
        return res;
      } catch (error) {
        console.log(error);
      }
      /*  switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    } */
    },
});
