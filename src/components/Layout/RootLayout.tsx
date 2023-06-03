import { useEffect } from 'react';
import { getTokenDuration } from '../../util/util';
import MainNavigation from './MainNavigation';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
const RootLayout:React.FC = () =>  {
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);
    if(tokenDuration){
    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration);
  }
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
