import React from 'react';

export default function Search({ isValue, click }) {
  return (
    <>
      <input type="text" value={isValue} onChange={(e) => e.target.value} />
      <button onClick={click}>포켓몬 찾기</button>
    </>
  );
}
