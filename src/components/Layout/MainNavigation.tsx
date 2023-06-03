import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

import classes from './MainNavigation.module.css';
const MainNavigation: React.FC<{}> = () => {
  const token = useRouteLoaderData('root') as string;

  return (
    <header className={classes.header}>
      <NavLink to='/'>
        <div className={classes.logo}>React Auth</div>
      </NavLink>
      <nav>
        <ul>
          {
            token && (<li>
              <NavLink to='/feedbacks' className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>Feedbacks</NavLink>
            </li>)
          }{
            token && (
              <li>
                <NavLink to='/feedbacks/new' className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }>Nuovo feedback</NavLink>
              </li>
            )
          }
          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Login
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
