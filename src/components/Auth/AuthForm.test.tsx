import { render, screen, fireEvent } from '@testing-library/react';
import {  RouterProvider, createMemoryRouter } from 'react-router-dom';
import AuthenticationPage, {
  action as authAction,
} from '../../pages/Authentication';

function initRoute(path: string) {
  const routes = [
    {
      path: 'auth',
      element: <AuthenticationPage />,
      action: authAction,
    }
  ];
  const router = createMemoryRouter (routes, {
    initialEntries: ["/", path],
    initialIndex: 1,
  });
  render(<RouterProvider router={router} />);
};

describe('Auth component', () => {

// Test rendering of AuthForm
test('renders AuthForm component', () => {
  initRoute("/auth?mode=login");
  // Assert that the component renders without error
  expect(screen.getByText('Log in')).toBeInTheDocument();
});

// Test form submission
test('submits form', () => {
  initRoute("/auth?mode=login");
  
  // Simulate user input
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'test123' } });
  
  // Submit the form
  fireEvent.click(screen.getByText('Save'));
  
  // Assert that the form is submitting
  expect(screen.getByText('Submitting...')).toBeInTheDocument();
  }
);

// Test link click
test('changes mode on link click', () => {
  initRoute("/auth?mode=login");
  
  // Click on the link to change mode
  fireEvent.click(screen.getByText('Create new user'));
  
  // Assert that the mode has changed
  expect(screen.getByText('Create a new user')).toBeInTheDocument();
})});

