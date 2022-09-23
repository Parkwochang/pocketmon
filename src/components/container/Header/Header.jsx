import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderMenu from './menu/HeaderMenu';

export default function MenuHeader() {
  const { Header } = Layout;
  const params = useParams();

  return (
    <Header>
      <div className="logo" />
      <HeaderMenu />
    </Header>
  );
}
