import { useHistory } from 'react-router-dom';

import classes from './Anagrafica.module.css';
import { changePassword } from "../../store/auth-action";

import { useSelector,useDispatch } from "react-redux";

const Anagrafica = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authSlice.token);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    dispatch(changePassword({
      token: token,
      password: enteredNewPassword
    }));

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="6" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default Anagrafica;
