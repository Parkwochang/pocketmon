import React from 'react';
import StartBtn from '../../button/StartBtn';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes';
import { Layout } from 'antd';

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
