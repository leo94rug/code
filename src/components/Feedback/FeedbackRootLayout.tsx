import { Outlet } from 'react-router-dom';

const FeedbacksRootLayout:React.FC <{}> = () =>   {
  return (
    <>
      <Outlet />
    </>
  );
}

export default FeedbacksRootLayout;
