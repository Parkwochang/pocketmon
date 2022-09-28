import { Card } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { pocketListState } from '../../../atom/atom';
import { color } from '../../../data/color';
import ListMoveBtn from '../../button/ListMoveBtn';

export default function IndependentCard(props) {
  const { sendData } = props; // senData의 현재 값
  const { setClick } = props; // sendData 변경
  const { clickBoolean } = props; // 클릭의 유무를 boolean 값으로

  const pocketList = useRecoilValue(pocketListState);

  const [resetData, setResetData] = useState({});
  const btnClick = (location) => {
    if (location === 'left') {
      setResetData(pocketList.data.find((data) => parseInt(data.id) === parseInt(resetData.id) - 1));
    } else if (location === 'right') {
      setResetData(pocketList.data.find((data) => parseInt(data.id) === parseInt(resetData.id) + 1));
    }
  };

  useEffect(() => {
    setResetData(sendData.data);
  }, []);

  return (
    <div className="site-card-border-less-wrapper">
      <Card
        onClick={() => setClick((pre) => ({ ...pre, click: !clickBoolean }))}
        title="Card title"
        bordered={false}
        style={{
          width: 500,
        }}
      >
        <img src={resetData.sprites} alt="pocketmon" style={{ width: '80%' }} />
        <p>{resetData.name}</p>
        <p>{resetData.height}</p>
        <div style={{ display: 'flex' }}>
          {resetData.types?.map((root) => (
            <span style={{ width: '45%', backgroundColor: `${color[root]}` }}>{root}</span>
          ))}
        </div>
      </Card>
      <ListMoveBtn btnClick={btnClick} />
    </div>
  );
}
