import { Await, useRouteLoaderData } from 'react-router-dom';

import FeedbackForm from '../components/Feedback/FeedbackForm';
import Feedback from '../models/feedback';
import { Suspense } from 'react';
import FeedbackItem from '../components/Feedback/FeedbackItem';

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
  //return <FeedbackForm method="patch" feedback={feedback} />;
}

export default EditFeedbackPage;
