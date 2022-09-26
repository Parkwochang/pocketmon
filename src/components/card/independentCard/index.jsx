import { Card } from 'antd';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { handOverData } from '../../../atom/atom';
import { color } from '../../../data/color';

export default function IndependentCard(props) {
  const handOver = useRecoilValue(handOverData);

  const { setClick } = props;
  const { clickBoolean } = props;

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
        <img src={handOver.data.sprites} alt="pocketmon" style={{ width: '80%' }} />
        <p>{handOver.data.name}</p>
        <p>{handOver.data.height}</p>
        <div style={{ display: 'flex' }}>
          {handOver.data.types.map((root) => (
            <span style={{ width: '45%', backgroundColor: `${color[root]}` }}>{root}</span>
          ))}
        </div>
      </Card>
    </div>
  );
}
