import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { pocketListState } from '../../atom/atom';

export default function Search(props) {
  const [search, setSearch] = useState('');

  const searchData = useRecoilValue(pocketListState);
  console.log(searchData);
  const data = searchData.data.name;

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // const fillterName = data.filter((p) => p.includes(search));
  // console.log(fillterName);

  return (
    <>
      <input type="text" value={search} onChange={onChangeSearch} />
      <button type="submit" onClick={() => {}}>
        포켓몬 검색
      </button>
    </>
  );
}
