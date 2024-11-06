import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router';
import Banner from './Banner';
import FooterCustom from './Footer';
import HeaderCustom from './Header';
import styles from './style.module.scss';

interface IMainLayoutProps {}

const MainLayout: React.FC<IMainLayoutProps> = (props: IMainLayoutProps) => {
  const year = new Date().getFullYear();

  return (
    <Layout>
      <HeaderCustom />
      <Banner />
      <Content className={`${styles.content} container`}>
        <Outlet />
      </Content>
      <FooterCustom year={year} />
    </Layout>
  );
};
export default MainLayout