export default function ListMoveBtn(props) {
  const { btnClick } = props;

  return (
    <>
      <button onClick={() => btnClick('left')}>왼쪽</button>
      <button onClick={() => btnClick('right')}>오른쪽</button>
    </>
  );
}
