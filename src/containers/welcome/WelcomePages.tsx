import { Button } from '@/components/ui/button';
import { PATH_DASHBOARD } from '@/routes/paths';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

export const WelcomePages = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/aa/c2/e4/aac2e4ae038a93420b0190165c73e06d.jpg')",
      }}
    >
      <Row justify="center" align="middle" className="h-full">
        <Col className="flex items-center justify-center flex-col">
          <div className="text-black text-4xl font-semibold">Welcome!</div>
          <Button
            className="text-2xl font-semibold mt-4"
            size={'lg'}
            onClick={() => navigate(PATH_DASHBOARD.CROSSWORD_GAME)}
          >
            Bắt đầu
          </Button>
        </Col>
      </Row>
    </div>
  );
};
