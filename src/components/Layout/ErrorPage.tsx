import { useRouteError } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import PageContent from './PageContent';

interface ErrorData {
  message: string;
}

interface ErrorStatus {
  status: number;
  data: ErrorData;
}

const ErrorPage:React.FC <{}> = () =>   {
  const error = useRouteError() as ErrorStatus;

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
