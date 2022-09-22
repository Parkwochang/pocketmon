import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';

export default function MainFooter() {
  const { Header, Content, Footer } = Layout;
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      <div>Pokémon ©1996 Created by nintendo UED</div>
    </Footer>
  );
}
