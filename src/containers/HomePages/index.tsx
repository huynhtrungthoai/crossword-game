import { Col, Row } from 'antd';
import './style.scss';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { resetGame, setGame, showAnswer } from '@/redux/slices/userSlice';
import { crosswordData } from '@/utilities/dumpData';

interface IProps {}

const HomePage: React.FC<IProps> = (props: IProps) => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();
  const [countdown, setCountdown] = useState(30);
  const [selectedSuggest, setSelectedSuggest] = useState(1);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(undefined);
  const gameData = useSelector((state: { user: { games: any } }) => state.user.games);

  const filterPeopleGame = gameData.filter((game: any) => game.type === 'PEOPLE');
  const filterLocationGame = gameData.filter((game: any) => game.type === 'LOCATION');

  useEffect(() => {
    console.log(`🚀 ~ selectedQuestion:`, selectedQuestion, gameData);
  }, [selectedQuestion]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showDialog && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setShowDialog(false);
    }
    return () => clearInterval(timer);
  }, [showDialog, countdown]);

  const onSuggestPress = (number: number) => {
    setShowDialog(true);
    setSelectedSuggest(number);
    setCountdown(30); // Reset countdown when dialog is shown
  };

  const onShowAnswer = () => {
    setSelectedQuestion({ ...selectedQuestion, isShow: true });
    selectedQuestion?.id && dispatch(showAnswer({ id: selectedQuestion?.id }));
  };

  const onAddData = () => {
    dispatch(setGame(crosswordData));
  };

  const onResetGame = () => {
    dispatch(resetGame());
    window.location.reload();
  };

  // SUGGESTION DIALOG
  function renderSuggestDialog() {
    return (
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent
          className="sm:max-w-[825px]"
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-4xl">{`Gợi ý ${selectedSuggest}`}</DialogTitle>
            <DialogDescription className="text-center text-7xl font-semibold mv-10 text-black">
              {selectedQuestion?.[`suggest${selectedSuggest}`]}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center items-center mt-4">
            <div
              className="border-4 border-blue-900 rounded-full flex justify-center items-center bg-blue-400"
              style={{ minWidth: '110px', minHeight: '110px' }}
            >
              <div className="text-6xl font-bold">{countdown}</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Col>
      <Row style={{ textAlign: 'center', justifyContent: 'center', height: '20vh', width: '100%' }}>
        <Col
          span={12}
          className="bg-green-500 flex flex-col items-center justify-center"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1357830750/vector/geometric-illustration-of-multi-coloured-human-figures.jpg?s=612x612&w=0&k=20&c=2uvkAa8B9pyBcMbMUoE6zQVXPrNAz8Tdysdfq8G3oKM=")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '30vw',
          }}
        >
          <Col
            className="bg-white rounded-lg p-4 flex flex-col items-center"
            // style={{ width: '60%' }}
          >
            <div className="text-4xl font-semibold">Chủ đề: Nhân vật</div>
            <Row>
              {filterPeopleGame.map((game: any, index: number) => {
                return (
                  <Button
                    key={index}
                    size={'lg'}
                    onClick={() => setSelectedQuestion(game)}
                    className={`m-2 ${game?.isShow ? 'bg-gray-700' : 'bg-green-500'}  ${
                      game?.isShow ? 'hover:bg-gray-700' : 'hover:bg-green-400'
                    } text-xl`}
                  >
                    {index + 1}
                  </Button>
                );
              })}
            </Row>
          </Col>
        </Col>
        <Col
          span={12}
          className="bg-green-500 flex flex-col items-center justify-center"
          style={{
            backgroundImage:
              'url("https://upload.wikimedia.org/wikipedia/commons/d/d0/Atlas_forrest.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '30vw',
          }}
        >
          <Col
            className="bg-white rounded-lg p-4 flex flex-col items-center"
            // style={{ width: '60%' }}
          >
            <div className="text-4xl font-semibold">Chủ đề: Địa danh</div>
            <Row>
              {filterLocationGame.map((game: any, index: number) => {
                return (
                  <Button
                    key={index}
                    size={'lg'}
                    onClick={() => setSelectedQuestion(game)}
                    className={`m-2 ${game?.isShow ? 'bg-gray-700' : 'bg-green-500'} ${
                      game?.isShow ? 'hover:bg-gray-700' : 'hover:bg-green-400'
                    } text-xl`}
                  >
                    {index + 6}
                  </Button>
                );
              })}
            </Row>
          </Col>
        </Col>
      </Row>

      {/* ==== CONTENT ==== */}
      <Col
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FFFFFF',
          backgroundImage:
            'url("https://png.pngtree.com/thumb_back/fh260/background/20231230/pngtree-aged-and-textured-vintage-paper-background-image_13858590.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {selectedQuestion ? (
          <>
            <Col>
              <div className="text-6xl font-medium">{`Câu: ${selectedQuestion?.id}`}</div>
              <div className="text-8xl mt-3 font-semibold">{`${
                selectedQuestion?.type === 'PEOPLE' ? 'Đây là ai?' : 'Đây là đâu?'
              }`}</div>
            </Col>
            <Row onClick={onShowAnswer} className="crossword-grid">
              {selectedQuestion?.answer.split('').map((item, index) => (
                <Col key={index} className="crossword-cell font-semibold text-6xl">
                  {selectedQuestion?.isShow ? item : ''}
                </Col>
              ))}
            </Row>
            {/* SUGGESTION */}
            <Row className="mt-20 gap-4">
              <Button size={'lg'} onClick={() => onSuggestPress(1)} className="m-2 text-xl">
                Gợi ý 1
              </Button>
              <Button size={'lg'} onClick={() => onSuggestPress(2)} className="m-2 text-xl">
                Gợi ý 2
              </Button>
              <Button size={'lg'} onClick={() => onSuggestPress(3)} className="m-2 text-xl">
                Gợi ý 3
              </Button>
            </Row>
          </>
        ) : (
          <div className="text-6xl font-semibold">Bắt đầu chọn câu hỏi</div>
        )}

        {/* ==== CONTENT ==== */}
      </Col>
      <Row className="flex justify-end w-full mt-4 mb-4">
        {/* <Button onClick={onShowAnswer} className="bg-blue-500">
          Show answer
        </Button> */}
        <Row className="gap-4">
          <Button onClick={onAddData} className="bg-green-500">
            Add Data
          </Button>
          <Button onClick={onResetGame} className="bg-red-500">
            Reset Game
          </Button>
        </Row>
      </Row>
      {renderSuggestDialog()}
    </Col>
  );
};

export default HomePage;