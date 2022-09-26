import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderMenu from './menu/HeaderMenu';
import { useRecoilValue } from 'recoil';
import { handOverData } from '../../../atom/atom';

export default function MenuHeader() {
  const { Header } = Layout;
  const params = useParams();
  const click = useRecoilValue(handOverData);

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
