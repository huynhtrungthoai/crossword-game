import React from 'react';
import { Col, Layout } from 'antd';
import { Outlet } from 'react-router-dom';

interface IProps {}

export const MainLayout: React.FC<IProps> = () => {
  return (
    <Layout>
      <Col style={{ height: 'auto', width: '100%', backgroundColor: 'white' }}>
        <Outlet />
      </Col>
      {/* <Content className={`${styles.content} container bg-red `} style={{ width: '100%' }}>
        <Outlet />
      </Content> */}
    </Layout>
  );
};
