import { useNavigate } from 'react-router-dom';
import Loading from '../../loading/loading';
import PageMoveList from '../List/PageMoveList';
import { Layout } from 'antd';
import MenuHeader from '../Header/Header';
import MainFooter from '../../footer/Footer';
import MainList from '../List/MainList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { handOverData, listLength, pocketListState } from '../../../atom/atom';
import pocketmonApiList from '../../../api/api';
import axios from 'axios';
import IndependentCard from '../../card/independentCard';

export default function Main() {
  const editIndex = useRecoilValue(listLength); // 상단 메뉴로 받은 파라미터

  const [list, setList] = useRecoilState(pocketListState);

  const { limit, offset } = editIndex;

  // const { loading } = list; -> 로딩용

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

            const data = {
              name: res.data.name,
              id: res.data.id,
              height: res.data.height,
              sprites: res.data.sprites.other['official-artwork'].front_default,
              types: res.data.types.map((data) => data.type.name),
            };

            arr.push(data);

            //NOTE :: setState -> 먼저 담고 비교 후 출력 -> 조건을 애매하게 하면 렌더를 계속해서 느려짐
            if (arr.length === limit - offset) {
              let as = Object.assign(
                [],
                arr.sort((a, b) => {
                  if (a.id > b.id) return 1;
                  if (a.id === b.id) return 0;
                  if (a.id < b.id) return -1;
                })
              );

              setList((pre) => ({
                ...pre,
                //NOTE ::shallow copy of data push
                data: as,
              }));
            }
          })
        );
        console.log(list, '최종');
      })
      .finally(() => {
        setList((pre) => ({
          ...pre,
          loading: false,
        }));
      });
  }, [editIndex]);

  const navigate = useNavigate();

  return (
    <>
      <Layout className="layout">
        {<MenuHeader />}
        {/* {loading ? <Loading /> : } */}
        <MainList />
        <MainFooter />
        <PageMoveList click={() => navigate('/')} />
        {/* <ListMoveBtn /> */}
      </Layout>
    </>
  );
}
