import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {logout} from '../../store/auth-action';

import classes from './MainNavigation.module.css';
const MainNavigation:React.FC <{}> = () =>  {
  const dispatch = useDispatch();

  //const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);

  const logoutHandler = () => {
    //dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <NavLink to='/'>
        <div className={classes.logo}>React Auth</div>
      </NavLink>
      <nav>
        <ul>
          {
            <li>
              <NavLink to='/auth'>Login</NavLink>
            </li>
          }
          {
            <li>
              <NavLink to='/profile'>Profile</NavLink>
            </li>
          }
          {
            <li>
              <NavLink to='/feedbacks'>Feedbacks</NavLink>
            </li>
          }{
            <li>
              <NavLink to='/feedbacks/new'>Nuovo feedback</NavLink>
            </li>
          }
          {
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
