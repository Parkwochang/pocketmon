import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pocketListState, searchName } from '../../atom/atom';

export default function Search(props) {
  const [search, setSearch] = useRecoilState(searchName);
  const [searchTwo, setSearchTwo] = useRecoilValue(searchName);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    setSearchTwo(search);
  };

  return (
    <>
      <input type="text" value={search} onChange={onChangeSearch} />
      <button type="submit" onClick={() => {}}>
        포켓몬 검색
      </button>
    </>
  );
}
