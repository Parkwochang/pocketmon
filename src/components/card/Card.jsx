import { useEffect, useState } from 'react';
import { api } from '../container/main/Home';
import { Card } from 'antd';
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

  // console.log(first);
  return (
    <Card>
      <Card.Grid style={gridStyle}>
        <img src={first} alt="pocketmon" style={{ width: '80%' }} />
        <p>123{}</p>
        <p>123{}</p>
        <div style={{ display: 'flex' }}>
          <span style={{ width: '45%', backgroundColor: 'green' }}>1{}</span>
          <span style={{ width: '45%', backgroundColor: 'purple' }}>2{}</span>
        </div>
      </Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        Content
      </Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
    </Card>
  );
}
