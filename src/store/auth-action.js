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
            debugger;
            if (!response.ok) {
                throw new Error('Errore nel login!');
            }
            const data = await response.json();
            return data;
        }
        try {
            const authData = await sendLoginRequest();
            dispatch(
                authReducer.login({
                    token: authData.idToken
              })
            );
            debugger;
            localStorage.setItem('token', authData.idToken);
          } catch (error) {
            alert('Password errata');
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
    
            if (!response.ok) {
                throw new Error('Errore nella registrazione!');
            }
            const data = await response.json();
            return data;
        }
        try {
            const authData = await sendRegisterRequest();
            dispatch(
                authReducer.register({
                    token: authData.idToken
              })
            );
            localStorage.setItem('token', authData.idToken);
          } catch (error) {
            //..
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
  
          if (!response.ok) {
              throw new Error('Errore nel cambio password!');
          }
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
    debugger;
    return async (dispatch) => {
        const tokenData = localStorage.getItem('token');
        dispatch(
            authReducer.init(tokenData)
        );
    };
};