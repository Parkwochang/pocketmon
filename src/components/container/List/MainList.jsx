import PocketCard from '../../card/Card';
import { Layout } from 'antd';
import { useRecoilValue } from 'recoil';
import { pocketListState } from '../../../atom/atom';

export default function MainList() {
  const { Content } = Layout;

  const data = useRecoilValue(pocketListState);

  return (
    <Content
      style={{
        padding: '30px 50px 0px 50px',
      }}
    >
      {/* <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-layout-content">Content</div>
      <PocketCard data={data} />
    </Content>
  );
}
