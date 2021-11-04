import {  types  } from '../types/types';
const initState = {
    checking:true,
    /*uid:null,
    first_name:null,
    last_name:null,
    date_created:null*/
}

export const authReducer = (state = initState, action)=>{
    switch (action.type)  {
        case types.authLogin:
            console.log(action.payload)
            return {
                ...state,
                ...action.payload,
                checking:false
            }
        case types.authChekingFinish:
            return {
                ...state,
                checking: false
            }
        case types.authLogout:
            return {
                checking:false
            }
        default:
            return state;
    }
}