import {
  Form,
  Link,
} from 'react-router-dom';

import classes from './AuthForm.module.css';
import ErrorsViewer from '../ErrorsViewer';
import ErrorProps from '../../models/types/ErrorProps';
interface props {
  isLogin?: boolean;
  isSubmitting?: boolean;
}
type AuthFormProps = props & ErrorProps;

const AuthForm: React.FC<AuthFormProps> = ({ error, isLogin, isSubmitting }) => {
  isSubmitting = isSubmitting === undefined ? false : isSubmitting;
  isLogin = isLogin === undefined ? true : isLogin;

  return (
    <Form method="post" className={classes.form}>
      <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
      <ErrorsViewer error={error} />
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" required />
      </p>
      <div className={classes.actions}>
        <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
          {isLogin ? 'Create new user' : 'Login'}
        </Link>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export default AuthForm;
