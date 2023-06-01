import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
  LoaderFunction,
  LoaderFunctionArgs,
} from 'react-router-dom';
import { API_BASE_URL, API_VERSION } from '../config/apiConfig';
import FeedbackItem from '../components/Feedback/FeedbackItem';
import FeedbackParam from '../models/types/FeedbackURLParam';
import Feedback from '../models/feedback';

const FeedbackDetailPage:React.FC <{}> = () =>  {
  const { feedback } = useRouteLoaderData('feedback-detail') as {feedback:Feedback};
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={feedback}>
          {(loadedFeedback) => <FeedbackItem feedback={loadedFeedback} />}
        </Await>
      </Suspense>
    </>
  );
}

export default FeedbackDetailPage;

async function loadFeedback(id : Feedback["id"]|undefined) : Promise<Feedback> {
  const response = await fetch(`${API_BASE_URL}/feedback/${id}`);
  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected feedback.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.feedbacks;
  }
}

async function loadFeedbacks(): Promise<Feedback[]>  {
  const response = await fetch(`${API_BASE_URL}/feedback`);

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch feedbacks.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.feedbacks;
  }
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  const id = params.feedbackId;

  return defer({
    feedback: await loadFeedback(id),
    feedbacks: loadFeedbacks(),
  });
}

export async function action({ params, request }: LoaderFunctionArgs) {
  const id = params.feedbackId;
  const response = await fetch(`${API_BASE_URL}/feedback/${id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete feedback.' },
      {
        status: 500,
      }
    );
  }
  return redirect('/feedbacks');
}
