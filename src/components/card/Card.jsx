import { useEffect, useState } from 'react';
import { api } from '../container/main/Home';
import { Card } from 'antd';
import { color } from '../../data/color';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
  borderRadius: '10%',
  margin: '10px',
};

export default function PocketCard(props) {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    api().then((res) => setfirst(res /* .sprites.front_default */));
  }, []);
  const { data } = props;

  return (
    <Card>
      {data.data.map((res) => (
        <Card.Grid style={gridStyle} key={res.id}>
          <img src={res.sprites} alt="pocketmon" style={{ width: '80%' }} />
          <p>{res.name}</p>
          <p>{res.height}</p>
          <div style={{ display: 'flex' }}>
            {res.types.map((root) => (
              <span style={{ width: '45%', backgroundColor: `${color[root]}` }}>{root}</span>
            ))}
          </div>
        </Card.Grid>
      ))}
    </Card>
  );
}
