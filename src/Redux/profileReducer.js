import {ProfileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState={
        posts: [
            {id: 0, message: 'Океан. Безкрайняя водная гладь, искрящая под палящими лучами Солнца...', likesCount: 3},
            {id: 1, message: 'Земля. Леса да поля. На тебе жилье строим и сеем...', likesCount: 5},
            {id: 2, message: 'Делу время, потехе - час!', likesCount: 1},
            {id: 3, message: 'Кто утром рано встает - тому Бог подает!', likesCount: 0}
        ],
        profile: null,
        status: ''
    };

const  profileReducer=(state=initialState, action) =>{
    if (action.type === ADD_POST) {
        let newPost = {
            id: 4,
            message: action.newPostText,
            likesCount: 0
        };
        let stateCopy={...state};
        stateCopy.posts=[...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText ='';
        return stateCopy;
    }
    if (action.type === SET_USER_PROFILE) {
        return {...state, profile: action.profile};
    }if (action.type === SET_STATUS) {
        return {...state, status: action.status};
    }
    return state;
};
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
};
export const getStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    });
};
export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode===0) {
        dispatch(setStatus(status))
        }
    });
};

export default profileReducer;