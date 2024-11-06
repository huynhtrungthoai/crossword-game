import React, { useState, useEffect } from 'react';
import { Col, Layout, Row } from 'antd';
import styles from './style.module.scss';
import { Button } from '@/components/ui/button';
import { Outlet, useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '@/routes/paths';
import { Content } from 'antd/es/layout/layout';
import { Provider, useDispatch } from 'react-redux';
import store from '@/redux/store';
import { crosswordData } from '@/utilities/dumpData';
import { setGame } from '@/redux/slices/userSlice';

interface IProps {}

const GameLayout: React.FC<IProps> = (props: IProps) => {
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setGame(crosswordData));
  // }, []);

  return (
    <Layout>
      <Content className={`${styles.content} container`}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default GameLayout;
