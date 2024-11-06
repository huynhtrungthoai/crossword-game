import { HomePage } from '@/screens';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PATH_DASHBOARD } from './paths';
import { MainLayout } from '@/Layouts/MainLayout';

interface IProps {}
const RootRouter: React.FC<IProps> = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<MainLayout />}>
        <Route path={PATH_DASHBOARD.HOME} element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
