import { Route, Routes, useNavigate } from 'react-router-dom';
import ListMoveBtn from '../../button/ListMoveBtn';
import Loading from '../../loading/loading';
import PageMoveList from '../List/PageMoveList';
import { Breadcrumb, Layout, Menu } from 'antd';
import MenuHeader from '../Header/Header';
import MainFooter from '../../footer/Footer';
import MainList from '../List/MainList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { pocketListApi, pocketListState } from '../../../atom/atom';
import axios from 'axios';

export default function Main() {
  const [search, setSearch] = useRecoilState(pocketListState);

  const pocketmonData = useRecoilValue(pocketListApi('151'));
  const [first, setfirst] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let Arr = [];
    const content = pocketmonData.map(async (data) => {
      const res = await axios.get(data.url);
      if (res) {
        Arr.push(res.data);
        return res;
      } else {
        return null;
      }
    });
    setfirst(Arr);
  }, []);
  console.log(first);
  return (
    <>
      <Loading />
      <Layout className="layout">
        <MenuHeader />
        <MainList />
        <MainFooter />
        <PageMoveList click={() => navigate('/')} />
        {/* <ListMoveBtn /> */}
      </Layout>
    </>
  );
}
