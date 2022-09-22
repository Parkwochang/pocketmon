import { useRecoilValue } from 'recoil';
import { loading } from '../../atom/atom';

export default function Loading() {
  // const isLoading = useRecoilValue(loading);

  // if (!isLoading) {
  //   return <></>;
  // }

  return (
    <>
      <img src="" alt="Loading..." />
    </>
  );
}
