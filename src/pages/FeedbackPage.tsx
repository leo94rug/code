import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import { API_BASE_URL, API_VERSION } from '../config/apiConfig';

import FeedbacksList from '../components/Feedback/FeedbacksList';
import LoaderDataFeedbacks from '../models/interfaces/loader/LoaderDataFeedbacks';


const FeedbacksPage:React.FC <{}> = () => {
  const { feedbacks } = useLoaderData() as LoaderDataFeedbacks;

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={feedbacks}>
        {(loadedFeedbacks) => <FeedbacksList feedbacks={loadedFeedbacks} />}
      </Await>
    </Suspense>
  );
}

export default FeedbacksPage;

async function loadFeedbacks() {
  const response = await fetch(`${API_BASE_URL}/feedback`);

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.feedbacks;
  }
}

export function loader() {
  return defer({
    feedbacks: loadFeedbacks(),
  });
}
