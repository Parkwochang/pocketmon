import { useEffect, useState } from 'react';
import { api } from '../container/main/Home';
import { Card } from 'antd';
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

export default function PocketCard(props) {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    api().then((res) => setfirst(res /* .sprites.front_default */));
  }, []);

  console.log(first);
  return (
    <Card>
      <Card.Grid style={gridStyle}>
        <img src={first} alt="pocketmon" style={{ width: '80%' }} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        Content
      </Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
    </Card>
  );
}
