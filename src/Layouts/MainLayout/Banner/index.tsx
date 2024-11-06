import { Row } from 'antd';

interface IProps {}

const URL =
  'https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/172740/Originals/background-la-gi-1.jpg';

const Banner: React.FC<IProps> = ({}: IProps) => {
  return (
    <Row
      className="banner"
      style={{
        width: '100%',
        height: '320px',
        backgroundImage: `url(${URL})`,
        backgroundPosition: 'left bottom',
        backgroundSize: 'cover',
      }}
    />
  );
};

export default Banner;
