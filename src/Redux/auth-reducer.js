import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState={
    id: null,
    email: null,
    login: null,
    //isFetching: true,
    isAuth: false,
    };

const  authReducer=(state=initialState, action) =>{
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
         }
        default: return state;
    }
};
export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}});
export const getAuthUserData = ()=> (dispatch)=>{
   return  authAPI.me()
        .then(response => {
            if (response.data.resultCode===0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
};
export const login = (email, password, rememberMe)=> (dispatch)=>{
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode===0) {
                dispatch(getAuthUserData())
            } else {
                let message=response.data.messages.length>0 ? response.data.messages[0]: 'Ooops';
                alert(message);
                dispatch(stopSubmit('login', {_error: 'You wrong'}));
            }
        });
};
export const logout = ()=> (dispatch)=>{
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode===0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
};

export default authReducer;

