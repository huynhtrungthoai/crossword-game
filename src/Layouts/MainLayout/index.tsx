import React from 'react';
import { Layout } from 'antd';
import styles from './style.module.scss';
import { Outlet } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';

interface IProps {}

export const MainLayout: React.FC<IProps> = () => {
  return (
    <Layout>
      <Content className={`${styles.content} container`}>
        <Outlet />
      </Content>
    </Layout>
  );
};
