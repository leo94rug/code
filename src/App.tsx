import RootLayout from "./components/Layout/RootLayout";
import FeedbacksRootLayout from "./components/Feedback/FeedbackRootLayout";
import FeedbacksPage, { loader as feedbacksLoader }  from "./pages/FeedbackPage";
import EditFeedbackPage, { action as manipulateFeedbackAction }  from "./pages/EditFeedbackPage";
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
import AuthPage, {
  action as authAction,
} from './pages/AuthPage';
export const routesConfig = [
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
        element: <AuthPage />,
        action: authAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
];
const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
