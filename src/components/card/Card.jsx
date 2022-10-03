import { Card } from 'antd';
import { useRecoilValue } from 'recoil';
import { searchName } from '../../atom/atom';
import { color } from '../../data/color';
import React, { useEffect } from 'react';

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
  const search = useRecoilValue(searchName);

  const filterTitle = data.data.filter((d) => {
    return d.name.includes(search);
  });

  // console.log(filterTitle, '필터 처리');
  // filterTitle.map((res) => console.log(res, '필터 처리 된 애들'));

  return (
    <Card>
      {filterTitle.map((res) => {
        const handOverData = res;
        return (
          <Card.Grid style={gridStyle} key={`${res.id}-key`} onClick={() => setClick((pre) => ({ ...pre, click: !clickBoolean, data: handOverData }))}>
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
    // <Card>
    //   {data.data.map((res) => {
    //     const handOverData = res;
    //     return (
    //       <Card.Grid style={gridStyle} key={res.id} onClick={() => setClick((pre) => ({ ...pre, click: !clickBoolean, data: handOverData }))}>
    //         <img src={res.sprites} alt="pocketmon" style={{ width: '80%' }} />
    //         <p>{res.name}</p>
    //         <p>{res.height}</p>
    //         <div style={{ display: 'flex' }}>
    //           {res.types.map((root) => (
    //             <span style={{ width: '45%', backgroundColor: `${color[root]}` }}>{root}</span>
    //           ))}
    //         </div>
    //       </Card.Grid>
    //     );
    //   })}
    // </Card>
  );
}
