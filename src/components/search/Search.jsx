import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchName } from '../../atom/atom';

const Search = () => {
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
      <input type="text" value={searchTwo} onChange={onChangeSearch} placeholder="Let's find your Pokemon !" />
    </>
  );
}


export default Search;