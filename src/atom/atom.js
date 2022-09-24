import axios from 'axios';
import { atom, selector, selectorFamily } from 'recoil';
import pocketmonApiList from '../api/api';

// NOTE :: 상단 메뉴에 따른 매개변수
export const listLength = atom({
  key: 'pocketMonMenu',
  default: {
    limit: 151,
    offset: 0,
  },
});

// NOTE :: 전체 포켓몬 리스트

export const pocketListState = atom({
  key: 'pocketListStates',
  default: {
    loading: false,
    data: [],
    error: null,
  },
});

// NOTE:: 포켓몬 리스트 개별 호출

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
    },
});
