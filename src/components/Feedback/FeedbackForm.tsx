import {
  Form,
  useActionData,
  useNavigate,
  useNavigation
} from 'react-router-dom';
import classes from './FeedbackForm.module.css';
import FeedbackNullableProps from '../../models/interfaces/FeedbackNullableProps';
import ErrorsViewer from '../ErrorsViewer';
import ActionData from '../../models/interfaces/GenericError';

type FormMethod = {
  method: "get" | "post" | "put" | "delete" | "patch" | undefined;
}


type AllProps = FormMethod & FeedbackNullableProps ;


const FeedbackForm: React.FC<AllProps> = ({ method, feedback}) => {

  const actionData = useActionData() as ActionData;
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }
  return (
    <Form method={method} className={classes.form}>
      <ErrorsViewer error={actionData} />
      <p>
        <label htmlFor="title">Title</label>
        <input
            id="title"
            type="text"
            name="title"
            required={true}
            defaultValue={feedback?.title? feedback?.title : ''}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
            id="date"
            type="date"
            name="date"
            required={true}
            defaultValue={feedback?.date? feedback?.date : ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input
            id="description"
            type="text"
            name="description"
            required={true}
            defaultValue={feedback?.description? feedback?.description : ''}
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



