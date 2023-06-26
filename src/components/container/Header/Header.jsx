import React from 'react';
import { Layout } from 'antd';
import HeaderMenu from './menu/HeaderMenu';
import { useRecoilValue } from 'recoil';
import { sendData } from '../../../atom/atom';

export default function MenuHeader() {
  const { Header } = Layout;
  const click = useRecoilValue(sendData);

  return (
    <>
      {!click.click && (
        <Header>
          <div className="logo" />
          <HeaderMenu />
        </Header>
      )}
    </>
  );
}
