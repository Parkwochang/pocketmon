import React from 'react';
import { Layout } from 'antd';

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
