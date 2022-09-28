import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { routes } from '../../../../routes';
import StartBtn from '../../../button/StartBtn';

export default function Home() {
  return (
    <Layout className="layout">
      <h1>pocketmon</h1>
      <Link to={routes.MAIN}>
        <StartBtn />
      </Link>
    </Layout>
  );
}
