import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './index';
import { authReducer } from './auth-slice';

interface User {
  email: string;
  password: string;
  token?: string;
}

interface LoginResponse {
  idToken: string;
}

export const login = (user: User): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    const sendLoginRequest = async () => {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=YOUR_API_KEY',
        {
          method: 'POST',
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Errore nel login!');
      }
      const data: LoginResponse = await response.json();
      return data;
    };
    try {
      const authData = await sendLoginRequest();
      const idToken = authData.idToken;
      dispatch(
        authReducer.login({
          token: idToken,
        })
      );
      localStorage.setItem('token', idToken);
    } catch (error) {
      alert('Login error');
    }
  };
};

export const register = (user: User): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    const sendRegisterRequest = async () => {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=YOUR_API_KEY',
        {
          method: 'POST',
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Errore nella registrazione!');
      }
      const data: LoginResponse = await response.json();
      return data;
    };
    try {
      const authData = await sendRegisterRequest();
      const idToken = authData.idToken;
      dispatch(
        authReducer.register({
          token: idToken,
        })
      );
      localStorage.setItem('token', idToken);
    } catch (error) {
      alert('Register error');
    }
  };
};

export const changePassword = (user: User): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    const sendChangePasswordRequest = async () => {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:update?key=YOUR_API_KEY',
        {
          method: 'POST',
          body: JSON.stringify({
            idToken: user.token,
            password: user.password,
            returnSecureToken: false,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Errore nel cambio password!');
      }
      const data = await response.json();
      return data;
    };
    try {
      await sendChangePasswordRequest();
    } catch (error) {
      // Handle error
    }
  };
};

export const logout = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    dispatch(authReducer.logout({}));
    localStorage.removeItem('token');
  };
};
export const init = (): ThunkAction<void, RootState, unknown, Action<string>> => {
    return async (dispatch) => {
        const tokenData = localStorage.getItem('token');
        dispatch(
            authReducer.init(tokenData)
        );
    };
};