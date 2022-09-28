import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderMenu from './menu/HeaderMenu';
import { useRecoilValue } from 'recoil';
import { sendData } from '../../../atom/atom';

export default function MenuHeader() {
  const { Header } = Layout;
  const params = useParams();
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
