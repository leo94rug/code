import { init } from "./store/auth-action";
import  { useEffect } from 'react';
import { action as manipulateFeedbackAction } from './components/Feedback/FeedbackForm';
import RootLayout from "./components/Layout/RootLayout";
import FeedbacksRootLayout from "./components/Feedback/FeedbackRootLayout";
import FeedbacksPage, { loader as feedbacksLoader }  from "./pages/FeedbackPage";
import EditFeedbackPage from "./pages/EditFeedbackPage";
import NewFeedbackPage from "./pages/NewFeedbackPage";
import FeedbackDetailPage, {
  loader as feedbackDetailLoader,
  action as deleteFeedbackAction,
} from './pages/FeedbackDetailPage'; 
import HomePage from "./pages/HomePage";
import { useSelector, useDispatch } from "react-redux";
import ErrorPage from "./components/Layout/ErrorPage";
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import { tokenLoader } from "./util/util";
import { action as logoutAction } from './pages/Logout';
import AuthenticationPage, {
  action as authAction,
} from './pages/Authentication';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'feedbacks',
        element: <FeedbacksRootLayout />,
        children: [
          {
            index: true,
            element: <FeedbacksPage />,
            loader: feedbacksLoader,
          },
          {
            path: ':feedbackId',
            id: 'feedback-detail',
            loader: feedbackDetailLoader  ,
            children: [
              {
                index: true,
                element: <FeedbackDetailPage />,
                action: deleteFeedbackAction,
              },
              {
                path: 'edit',
                element: <EditFeedbackPage />,
                action: manipulateFeedbackAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewFeedbackPage />,
            action: manipulateFeedbackAction,
          },
        ],
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  const isLoggedIn = useSelector((state: any) => state.authSlice.isLoggedIn);
  const dispatch = useDispatch();

 /* useEffect(() => {
    dispatch(init());
  }, [dispatch]);*/
  return (
    <RouterProvider router={router} />
  );
}

export default App;
