import { Breadcrumb, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function HeaderMenu(params) {
  const onClick = (info) => {
    console.log('menuClick', info);
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
