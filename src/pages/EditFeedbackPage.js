import { useRouteLoaderData } from 'react-router-dom';

import FeedbackForm from '../components/Feedback/FeedbackForm';

function EditFeedbackPage() {
  const data = useRouteLoaderData('feedback-detail');

  return <FeedbackForm method="patch" feedback={data.feedback} />;
}

export default EditFeedbackPage;
