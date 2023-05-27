import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {logout} from '../../store/auth-action';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {
            <li>
              <Link to='/feedbacks'>Feedbacks</Link>
            </li>
          }
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
