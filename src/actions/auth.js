import { fetchSinToken, fetchConToken } from '../helpers/fetch'
import { types } from '../types/types'
import Swal from 'sweetalert2';

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken(
      'api/auth/login',
      { email, password },
      'POST',
    );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(login({ uid: body.id, name: `${body.first_name} ${body.last_name}` }));
    }else{
        Swal.fire('Error',body.msg,'error');
    }
  }
}

const login = (user) => ({
  type: types.authLogin,
  payload: user,
})


export const startRegister = (first_name, last_name, email, password)=>{
    return async(dispatch) => {

      const resp = await fetchSinToken(
            `api/auth/register`,
            {first_name, last_name, email, password},
            'POST',
        );
        const body = await resp.json();
        
        if (body.ok) {
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({ uid: body.id, name: `${body.first_name} ${body.last_name}` }));
        }else{
            Swal.fire('Error',body.msg,'error');
        }
    }
}

export const startChecking = () => {
  return async(dispatch) => {
    
    const resp = await fetchConToken(
        `api/auth/renew`,
    );

    const body = await resp.json();
    //console.log(body)
    if (body.ok) {
        localStorage.setItem('token',body.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(login({ uid: body.uid, name: `${body.first_name} ${body.last_name}` }));
    }else{
        //Swal.fire('Error',body.msg,'error');
        dispatch(checkingFinish());
    }
}
}

const checkingFinish = () =>({
  type: types.authChekingFinish
});

export const startLogout = () => {
  return async (dispatch)=>{
      localStorage.clear();
      dispatch(logout());
  }
} 

const logout = () => ({type:types.authLogout})