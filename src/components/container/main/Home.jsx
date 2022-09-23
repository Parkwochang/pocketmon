import React, { useEffect, useState } from 'react';
import StartBtn from '../../button/StartBtn';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes';
import pocketmonApi from '../../../api/api';
import pocketmonApiList from '../../../api/api';
import { useRecoilState } from 'recoil';
import { pocketListState } from '../../../atom/atom';
import axios from 'axios';
import { Breadcrumb, Layout, Menu } from 'antd';

export async function api() {
  const s = 'official-artwork';
  const first = await axios('https://pokeapi.co/api/v2/pokemon?limit=151&offset=70').then((res) => res.data.results);

  console.log(first, '12121212');
  const a = first[0];
  const url = a.url;
  console.log(url);
  const second = await axios(`${url}`).then((res) => res.data.sprites.other[s].front_default);
  console.log(second);

  return second;
}

export default function Home() {
  const [content, setContent] = useRecoilState(pocketListState);

  const onNavChange = () => {
    setContent((pre) => ({
      ...pre,
      limit: '251',
    }));
  };

  useEffect(() => {
    const asyncContainer = async () => {
      await pocketmonApiList();
    };
    asyncContainer();
  }, []);

  const onClick = () => {};
  return (
    <Layout className="layout">
      <h1>pocketmon</h1>
      <Link to={routes.MAIN}>
        <StartBtn click={onClick} />
      </Link>
    </Layout>
  );
}
