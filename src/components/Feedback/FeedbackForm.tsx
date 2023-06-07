import {
  Form,
  useActionData,
  useNavigate,
  useNavigation
} from 'react-router-dom';
import classes from './FeedbackForm.module.css';
import FeedbackNullableProps from '../../models/interfaces/FeedbackNullableProps';
import ErrorsViewer from '../ErrorsViewer';
import ErrorProps from '../../models/types/ErrorProps';
import InputField from "../../models/types/InputField";
import InputComponentList from '../Layout/InputComponentList';
import ActionData from '../../models/interfaces/GenericError';

type FormMethod = {
  method: "get" | "post" | "put" | "delete" | "patch" | undefined;
}


type AllProps = FormMethod & FeedbackNullableProps ;


const FeedbackForm: React.FC<AllProps> = ({ method, feedback}) => {
  const feedbackInputField: InputField[] = [
    {
      id: "title",
      type: "text",
      name: "title",
      required: true,
      defaultValue: feedback?.title,
      component: "input",
      label: "Title"
    }, {
      id: "date",
      type: "date",
      name: "date",
      required: true,
      defaultValue: feedback?.date,
      component: "input",
      label: "Date"
    }, {
      id: "description",
      type: "text",
      name: "description",
      required: true,
      defaultValue: feedback?.description,
      rows: 5,
      component: "textArea",
      label: "Description"
    }
  ];
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
      <InputComponentList inputFields={feedbackInputField} />
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



