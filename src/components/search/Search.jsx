import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchName } from '../../atom/atom';

export default function Search() {
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
