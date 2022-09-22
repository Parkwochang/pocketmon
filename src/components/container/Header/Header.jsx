import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { pocket } from '../../../atom/atom';
import Search from '../../search/Search';
import { Breadcrumb, Layout, Menu } from 'antd';

export default function MenuHeader() {
  const { Header } = Layout;
  const [searchPocket, setSearchPocket] = useRecoilState(pocket);
  const params = useParams();

  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(8).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
  );
}
