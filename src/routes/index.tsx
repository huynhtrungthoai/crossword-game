import { Route, Routes, useLocation } from 'react-router-dom';
import { PATH_DASHBOARD } from './paths';
import { MainLayout } from '@/Layouts/MainLayout';
import { GamePages, WelcomePages } from '@/containers';

interface IProps {}
const RootRouter: React.FC<IProps> = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<MainLayout />}>
        <Route path={PATH_DASHBOARD.WELCOME} element={<WelcomePages />} />
        <Route path={PATH_DASHBOARD.CROSSWORD_GAME} element={<GamePages />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
