import { Card } from 'antd';
import { color } from '../../data/color';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
  borderRadius: '10%',
  margin: '10px',
};

export default function PocketCard(props) {
  const { data } = props;
  const { setClick } = props;
  const { clickBoolean } = props;

  return (
    <Card>
      {data.data.map((res) => {
        const handOverData = res;
        return (
          <Card.Grid style={gridStyle} key={res.id} onClick={() => setClick((pre) => ({ ...pre, click: !clickBoolean, data: handOverData }))}>
            <img src={res.sprites} alt="pocketmon" style={{ width: '80%' }} />
            <p>{res.name}</p>
            <p>{res.height}</p>
            <div style={{ display: 'flex' }}>
              {res.types.map((root) => (
                <span style={{ width: '45%', backgroundColor: `${color[root]}` }}>{root}</span>
              ))}
            </div>
          </Card.Grid>
        );
      })}
    </Card>
  );
}
