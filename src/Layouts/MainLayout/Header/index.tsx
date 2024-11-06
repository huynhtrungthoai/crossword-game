import Logo from '@/components/Logo';
import { PATH_DASHBOARD } from '@/routes/paths';
import { Button, Col, Menu, Row } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { MenuProps } from 'rc-menu';
import { Mail, Smartphone, User } from 'react-feather';

import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import SearchField from '@/components/Form-control/SearchField';
import { useForm } from 'react-hook-form';

interface IProps {}

function link(path: string, label: string) {
  return (
    <Link className={styles.menu} to={path}>
      {label}
    </Link>
  );
}

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  // {
  //   key: "home",
  //   label: link(PATH_DASHBOARD.HOME, "Trang chủ"),
  // },
  {
    key: 'tour',
    label: link(PATH_DASHBOARD.TOUR, 'Tour Du Lịch'),
    children: [
      {
        // TOUR MIỀN BẮC
        key: 'tour_north',
        label: link(PATH_DASHBOARD.TOUR_NORTH, 'Tour Miền Bắc'),
        children: [
          {
            key: 'tour_north_hanoi',
            label: link(PATH_DASHBOARD.TOUR_NORTH_HANOI, 'Hà Nội'),
          },
          {
            key: 'tour_north_halong',
            label: link(PATH_DASHBOARD.TOUR_NORTH_HALONG, 'Hạ Long'),
          },
          {
            key: 'tour_north_ninhbinh',
            label: link(PATH_DASHBOARD.TOUR_NORTH_NINHBINH, 'Ninh Bình'),
          },
          {
            key: 'tour_north_all',
            label: link(PATH_DASHBOARD.TOUR_NORTH_ALL, 'Tất cả'),
          },
        ],
      },
      {
        // TOUR MIỀN TRUNG
        key: 'tour_central_vn',
        label: link(PATH_DASHBOARD.TOUR_CENTRAL_VN, 'Tour Miền Trung'),
        children: [
          {
            key: 'tour_central_vn_hue',
            label: link(PATH_DASHBOARD.TOUR_CENTRAL_VN_HUE, 'Huế'),
          },
          {
            key: 'tour_central_vn_danang',
            label: link(PATH_DASHBOARD.TOUR_NORTH_HALONG, 'Đà Nẵng'),
          },
          {
            key: 'tour_central_vn_nhatrang',
            label: link(PATH_DASHBOARD.TOUR_CENTRAL_VN_NHATRANG, 'Nha Trang'),
          },
          {
            key: 'tour_central_vn_dalat',
            label: link(PATH_DASHBOARD.TOUR_CENTRAL_VN_DALAT, 'Đà Lạt'),
          },
          {
            key: 'tour_central_vn_all',
            label: link(PATH_DASHBOARD.TOUR_CENTRAL_VN_ALL, 'Tất cả'),
          },
        ],
      },
      {
        // TOUR MIỀN NAM
        key: 'tour_southeast',
        label: link(PATH_DASHBOARD.TOUR_SOUTHEAST, 'Tour Miền Nam'),
        children: [
          {
            key: 'tour_southeast_vungtau',
            label: link(PATH_DASHBOARD.TOUR_SOUTHEAST_VUNGTAU, 'Vũng Tàu'),
          },
          {
            key: 'tour_southeast_condao',
            label: link(PATH_DASHBOARD.TOUR_SOUTHEAST_CONDAO, 'Côn Đảo'),
          },
          {
            key: 'tour_southeast_dongnai',
            label: link(PATH_DASHBOARD.TOUR_SOUTHEAST_DONGNAI, 'Đồng Nai'),
          },
          {
            key: 'tour_southeast_all',
            label: link(PATH_DASHBOARD.TOUR_SOUTHEAST_ALL, 'Tất cả'),
          },
        ],
      },
    ],
  },
  {
    // HOTEL
    key: 'hotel',
    label: link(PATH_DASHBOARD.HOTEL, 'Khách sạn'),
  },
  {
    // FLIGHT
    key: 'flight',
    label: link(PATH_DASHBOARD.FLIGHT, 'Vé Máy Bay'),
  },
  {
    // RENT_CAR
    key: 'rent_car',
    label: link(PATH_DASHBOARD.RENT_CAR, 'Thuê xe'),
  },
  {
    // SERVICE
    key: 'service',
    label: link(PATH_DASHBOARD.SERVICE, 'Dịch vụ khác'),
    children: [
      {
        key: 'service_visa',
        label: link(PATH_DASHBOARD.SERVICE_VISA, 'Visa'),
      },
      {
        key: 'service_teambuilding',
        label: link(PATH_DASHBOARD.SERVICE_TEAMBUILDING, 'Teambuilding'),
      },
    ],
  },
  {
    // NEWS
    key: 'news',
    label: link(PATH_DASHBOARD.NEWS, 'Tin tức'),
  },
  {
    // PROMOTION
    key: 'promotion',
    label: link(PATH_DASHBOARD.PROMOTION, 'Khuyến mãi'),
  },
  {
    // MORE
    key: 'more',
    label: link(PATH_DASHBOARD.MORE, 'Thêm'),
    children: [
      {
        key: 'more_introduce',
        label: link(PATH_DASHBOARD.MORE_INTRODUCE, 'Giới thiệu'),
      },
      {
        key: 'more_contact',
        label: link(PATH_DASHBOARD.MORE_CONTACT, 'Liên Hệ'),
      },
    ],
  },
];

const HeaderCustom: React.FC<IProps> = (props: IProps) => {
  const navigate = useNavigate();
  const { control, handleSubmit, reset, getValues, register } = useForm<any>({});

  const handleClickLogo = () => {
    navigate('/');
  };

  const onSubmit = () => {};

  return (
    <>
      {/* <div className={styles.info}>
        <Row className={'container'} style={{ height: '100%' }}>
          <Col className={`${styles.col} globe-svg`} span={3}>
            <Smartphone size={16} style={{ marginRight: -20 }} />
            0866.04.05.06
          </Col>
          <Col className={`${styles.col} globe-svg`} span={5}>
            <Mail size={16} style={{ marginRight: -24 }} />
            dulichthienkim@gmail.com
          </Col>
          <Col className={`${styles.col} globe-svg`} span={12} />
          <Col className={`${styles.col} globe-svg`} span={2}>
            Đăng nhập
          </Col>
          <Col className={`${styles.col} globe-svg`} span={2}>
            Đăng ký
          </Col>
        </Row>
      </div> */}
      <Header className={styles.header}>
        <Row className={`container`} style={{ height: '100%', alignItems: 'center' }}>
          <Col span={4}>
            <Row className={styles.leftRowHeader}>
              <Col className={styles.logo} onClick={handleClickLogo}>
                <Logo />
              </Col>
            </Row>
          </Col>
          <Col span={20}>
            <Row className={styles.rightRowHeader}>
              <Menu className={styles.menu} mode="horizontal" items={items} />
              <Row className={styles.searchHeaderView}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <SearchField control={control} name="search" placeholder="Search Here" />
                </form>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<User />}
                  size={`middle`}
                  style={{ marginLeft: 12 }}
                />
              </Row>
            </Row>
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default HeaderCustom;
