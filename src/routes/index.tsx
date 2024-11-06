import { HomePage } from '@/Containers';
import ServicePage from '@/Containers/ServicePages';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PATH_DASHBOARD } from './paths';
import GameLayout from '@/Layouts/GameLayout';

interface IProps {}
const RootRouter: React.FC<IProps> = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<GameLayout />}>
        <Route path={PATH_DASHBOARD.HOME} element={<HomePage />} />
        <Route path={PATH_DASHBOARD.SERVICE} element={<ServicePage />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
