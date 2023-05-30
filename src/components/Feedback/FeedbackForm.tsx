import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect
} from 'react-router-dom';
import { API_BASE_URL, API_VERSION } from '../../config/apiConfig';
import classes from './FeedbackForm.module.css';
import Feedback from '../../models/feedback';


interface Props {
  method: string;
  feedback?: Feedback
}

const FeedbackForm:React.FC <Props> = ({ method, feedback }) =>    {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }
debugger;
  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={feedback ? feedback.title : ''}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={feedback ? feedback.date : ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={feedback ? feedback.description : ''}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export default FeedbackForm;

export async function action({ request, params }) {
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

