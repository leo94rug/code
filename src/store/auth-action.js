import { authReducer} from './auth-slice';

export const login = (user) => {
    return async (dispatch) => {
        const sendLoginRequest = async () => {
            
            const response = await fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUb0xKyZ6sLLzfjbDkEbf_R3plBtjbBy8',{
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
            //if (!response.ok) {
            //    throw new Error('Errore nel login!');
            //}
            const data = await response.json();
            return data;
        }
        try {
            const authData = await sendLoginRequest();
            //const idToken = authData.idToken;
            const idToken = 'gadfsfhdsfhsdh';
            dispatch(
                authReducer.login({
                    token: idToken
              })
            );
            localStorage.setItem('token', idToken);
          } catch (error) {
            alert('Login error');
          }
    };
};
export const register = (user) => {
    return async (dispatch) => {
        const sendRegisterRequest = async () => {
            const response = await fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUb0xKyZ6sLLzfjbDkEbf_R3plBtjbBy8',{
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
    
            //if (!response.ok) {
            //    throw new Error('Errore nella registrazione!');
            //}
            const data = await response.json();
            return data;
        }
        try {
            const authData = await sendRegisterRequest();
            //const idToken = authData.idToken
            const idToken = 'gadfsfhdsfhsdh';
            dispatch(
                authReducer.register({
                    token: idToken
              })
            );
            localStorage.setItem('token', idToken);
          } catch (error) {
            alert('Register error');
          }
    };
};
export const changePassword = (user) => {
  return async (dispatch) => {
      const sendChangePasswordRequest = async () => {
          const response = await fetch(
              'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDUb0xKyZ6sLLzfjbDkEbf_R3plBtjbBy8',{
                method: 'POST',
                body: JSON.stringify({
                  idToken: user.token,
                  password: user.password,
                  returnSecureToken: false
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              }
          );
  
          //if (!response.ok) {
          //    throw new Error('Errore nel cambio password!');
          //}
          const data = await response.json();
          return data;
      }
      try {
          await sendChangePasswordRequest();
          
        } catch (error) {
          //..
        }
  };
};
export const logout = () => {
    return async (dispatch) => {
        dispatch(
            authReducer.logout()
        );
        localStorage.removeItem('token');    
    };
};
export const init = () => {
    return async (dispatch) => {
        const tokenData = localStorage.getItem('token');
        dispatch(
            authReducer.init(tokenData)
        );
    };
};