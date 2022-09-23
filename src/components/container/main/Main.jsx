import { useNavigate } from 'react-router-dom';
import Loading from '../../loading/loading';
import PageMoveList from '../List/PageMoveList';
import { Layout } from 'antd';
import MenuHeader from '../Header/Header';
import MainFooter from '../../footer/Footer';
import MainList from '../List/MainList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { listLength, pocketListState } from '../../../atom/atom';
import pocketmonApiList from '../../../api/api';
import axios from 'axios';

export default function Main() {
  const editIndex = useRecoilValue(listLength); // 상단 메뉴로 받은 파라미터
  const [list, setList] = useRecoilState(pocketListState);

  const { limit, offset } = editIndex;
  console.log(limit, offset, 'params', typeof limit);

  useEffect(() => {
    let arr = [];

    setList((pre) => ({
      ...pre,
      loading: true,
    }));

    pocketmonApiList()
      .then((res) => {
        //NOTE :: name or url
        const result = res.data.results.slice(offset, limit);
        //NOTE :: axios reponse
        result.map((data) =>
          axios(data.url).then((res) => {
            //NOTE :: data push
            arr.push(res.data);
            //NOTE :: setState
            setList((pre) => ({
              ...pre,
              //NOTE :: deep copy of data push
              data: Object.assign([], arr),
            }));
          })
        );
      })
      .finally(() => {
        setList((pre) => ({
          ...pre,
          loading: false,
        }));
      });
  }, [editIndex]);
  console.log(list, '탑 메뉴별 리스트');

  const navigate = useNavigate();

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
