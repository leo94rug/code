import MainNavigation from './MainNavigation';
import { Outlet } from 'react-router-dom';
const RootLayout:React.FC <{}> = () =>  {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
