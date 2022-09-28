import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pocketListState, searchName } from '../../atom/atom';

export default function Search(props) {
  const [searchTwo, setSearchTwo] = useRecoilState(searchName);

  /**
   *
   * @param {*} e
   *
   */
  const onChangeSearch = (e) => {
    setSearchTwo(e.target.value);
  };

  return (
    <>
      <input type="text" value={searchTwo} onChange={onChangeSearch} placeholder="포켓몬 이름" />
    </>
  );
}
