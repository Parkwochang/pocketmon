import React from 'react';
import PocketCard from '../../card/Card';
import { Layout } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pocketListState, sendData } from '../../../atom/atom';
import IndependentCard from '../../card/independentCard';

export default function MainList() {
  const { Content } = Layout;

  const data = useRecoilValue(pocketListState);

  const [click, setClick] = useRecoilState(sendData);

  return (
    <Content
      style={{
        padding: '30px 50px 0px 50px',
      }}
    >
      {/* <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-layout-content">Content</div>
      {click.click ? <IndependentCard sendData={click} clickBoolean={click.click} setClick={setClick} /> : <PocketCard clickBoolean={click.click} setClick={setClick} data={data} />}
    </Content>
  );
}
