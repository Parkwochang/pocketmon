import { Menu } from 'antd';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { handOverData, listLength } from '../../../../atom/atom';
import { listOffset } from './_define';

export default function HeaderMenu() {
  const setListLen = useSetRecoilState(listLength);

  /**
   * @function(@param info) 탑 메뉴 클릭시 버전별 리스트 넘겨줌
   * @param {number} info
   */
  const onClick = (info) => {
    let index = info.key - 1;

    setListLen((pre) => ({
      ...pre,
      ...listOffset[index],
    }));
  };

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(8).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `version ${key}`,
            onClick: onClick,
          };
        })}
      />
    </>
  );
}
