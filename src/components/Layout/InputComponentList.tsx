import {
  Form,
  useNavigate,
  useNavigation
} from 'react-router-dom';
import classes from './FeedbackForm.module.css';
import FeedbackNullableProps from '../../models/interfaces/FeedbackNullableProps';
import ErrorsViewer from '../ErrorsViewer';
import ErrorProps from '../../models/types/ErrorProps';
import InputField from "../../models/types/InputField";
import Input from './InputText';
import { ReactElement } from 'react';
import TextArea from './TextArea';
import InputFieldContainer from './InputFieldContainer';
import InputGeneric from './InputGeneric';

type InputComponentListProps = {
  inputFields: InputField[];
}

const InputComponentList: React.FC<InputComponentListProps> = ({ inputFields }) => {

  return (
    <>
      {inputFields.map((inputField) => (
        <InputFieldContainer title={inputField.label} htmlFor={inputField.id}>
          <InputGeneric inputField={inputField} />
        </InputFieldContainer>
      ))}
    </>

  );
}

export default InputComponentList;



