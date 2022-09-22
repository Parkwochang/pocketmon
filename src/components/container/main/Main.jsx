import { Route, Routes, useNavigate } from 'react-router-dom';
import ListMoveBtn from '../../button/ListMoveBtn';
import Loading from '../../loading/loading';
import PageMoveList from '../List/PageMoveList';
import { Breadcrumb, Layout, Menu } from 'antd';
import MenuHeader from '../Header/Header';
import MainFooter from '../../footer/Footer';
import MainList from '../List/MainList';

export default function Main() {
  const navigate = useNavigate();

  return (
    <Layout className="layout">
      <MenuHeader />
      <MainList />
      <MainFooter />
      <PageMoveList click={() => navigate('/')} />
      {/* <ListMoveBtn /> */}
    </Layout>
  );
}
