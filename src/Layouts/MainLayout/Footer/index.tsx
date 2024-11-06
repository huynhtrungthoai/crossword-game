import { Col, Row } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import styles from './style.module.scss';
import { Mail, MapPin, Phone } from 'react-feather';
import googlePlay from '../../../assets/images/google_play.png';
import appleStore from '../../../assets/images/apple_store.png';
import ButtonPrimary from '@/components/Button/ButtonPrimary';

interface IProps {
  year: number;
}

const FooterCustom: React.FC<IProps> = ({ year }: IProps) => {
  return (
    <>
      <Footer className={styles.footer}>
        <Row className={'container'}>
          <Col span={8} style={{ textAlign: 'left' }}>
            <Col className={styles.title} style={{ marginBottom: 8 }}>
              Du Lịch Thiên Kim
            </Col>
            <Col className={styles.content}>- Chuyên thiết kế tour du lịch theo yêu cầu.</Col>
            <Col className={styles.content}>- Chuyên tour vé lẻ trong và ngoài nước.</Col>
            <Col className={styles.content}>
              - Nhận thiết kế, tổ chức sự kiện, chương trình teambuilding...
            </Col>
            <Col className={styles.content}>- Đại lý vé máy bay/Dịch vụ Visa các nước.</Col>
            <Col className={styles.content}>- Đặt phòng khách sạn, xe, Hướng dẫn viên.</Col>
          </Col>
          <Col span={8} style={{ textAlign: 'left' }}>
            <Col className={styles.title} style={{ marginBottom: 8 }}>
              Liên Hệ
            </Col>
            <Col className={styles.content}>
              <MapPin size={14} style={{ marginRight: 4 }} /> Địa chỉ: Số 83 Phạm Ngũ Lão, Phường
              hiệp Thành, Tp Thủ Dầu Một, tỉnh Bình Dương
            </Col>
            <Col className={styles.content}>
              <Phone size={14} style={{ marginRight: 4 }} /> Hotline: 0866.04.05.06
            </Col>
            <Col className={styles.content}>
              <Mail size={14} style={{ marginRight: 4 }} /> dulichthienkim@gmail.com
            </Col>
          </Col>
          <Col span={8}>
            <Row style={{ justifyContent: 'center' }}>
              <Col
                style={{
                  height: '48px',
                  aspectRatio: 2.74,
                  backgroundImage: `url(${googlePlay})`,
                  backgroundPosition: 'left bottom',
                  backgroundSize: 'cover',
                }}
              />
              <Col span={1} />
              <Col
                style={{
                  height: '48px',
                  aspectRatio: 2.74,
                  backgroundImage: `url(${appleStore})`,
                  backgroundPosition: 'left bottom',
                  backgroundSize: 'cover',
                }}
              />
            </Row>
            <Col style={{ marginTop: 12 }}>Hãy gửi phản hồi của bạn cho chúng tôi,</Col>
            <Col style={{ marginTop: 4 }}>để chúng tôi cải thiện tốt hơn.</Col>
            <Row style={{ justifyContent: 'center', marginTop: 8 }}>
              <ButtonPrimary text="Gửi phản hồi" onClick={() => {}} backgroundColor={'#C79644'} />
            </Row>
          </Col>
        </Row>
      </Footer>
      <div className={`${styles.copyright}`}>
        <Row className={`container ${styles.rowCopy}`}>
          <Col className={styles.colCopy} span={12}>
            &copy; COPYRIGHT {year} BY THIENKIM TOURIST. ALL RIGHTS RESERVED.
          </Col>
          <Col span={12}></Col>
        </Row>
      </div>
    </>
  );
};

export default FooterCustom;
