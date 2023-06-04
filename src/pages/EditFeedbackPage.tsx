import { Await, LoaderFunctionArgs, json, redirect, useRouteLoaderData } from 'react-router-dom';
import FeedbackForm from '../components/Feedback/FeedbackForm';
import Feedback from '../models/feedback';
import { Suspense } from 'react';
import { API_BASE_URL } from '../config/apiConfig';

const EditFeedbackPage: React.FC<{}> = () => {
  const {feedback} = useRouteLoaderData('feedback-detail')  as {feedback:Feedback};;
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={feedback}>
          {(loadedFeedback) => <FeedbackForm method="patch" feedback={loadedFeedback} />}
        </Await>
      </Suspense>
    </>
  );
}
export async function action({ request, params }: LoaderFunctionArgs) {
  const method = request.method;
  const data = await request.formData();

  const feedbackData = {
    title: data.get('title'),
    date: data.get('date'),
    description: data.get('description'),
  };

  let url = `${API_BASE_URL}/feedback`;

  if (method === 'PATCH') {
    const feedbackId = params.feedbackId;
    url = url + "/" + feedbackId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedbackData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save feedback.' }, { status: 500 });
  }

  return redirect('/feedbacks');
}
export default EditFeedbackPage;
