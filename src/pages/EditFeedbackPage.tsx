import { useRouteLoaderData } from 'react-router-dom';

import FeedbackForm from '../components/Feedback/FeedbackForm';
import Feedback from '../models/feedback';

const EditFeedbackPage: React.FC<{}> = () => {
  const feedback = useRouteLoaderData('feedback-detail') as Feedback;

  return <FeedbackForm method="patch" feedback={feedback} />;
}

export default EditFeedbackPage;
