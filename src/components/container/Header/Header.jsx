import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { pocket } from '../../../atom/atom';
import Search from '../../search/Search';
import { Breadcrumb, Layout, Menu } from 'antd';
import HeaderMenu from './menu/HeaderMenu';

export default function MenuHeader() {
  const { Header } = Layout;
  const [searchPocket, setSearchPocket] = useRecoilState(pocket);
  const params = useParams();

  return (
    <Header>
      <div className="logo" />
      <HeaderMenu />
    </Header>
  );
}
