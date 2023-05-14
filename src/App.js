import { Switch, Route, Redirect } from "react-router-dom";
import { init } from "./store/auth-action";
import React, { useEffect } from 'react';

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {isLoggedIn && <UserProfile />}
          {!isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
