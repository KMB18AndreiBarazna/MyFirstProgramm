import {dialogsAPI} from "../api/api";

const ADD_MESSAGE = 'ADD_MESSAGE';
const GET_DIALOGS_SUCCESS = 'DIALOGS/GET_DIALOGS_SUCCESS';
const GET_MESSAGES_SUCCESS = 'DIALOGS/GET_MESSAGES_SUCCESS';
const SEND_MESSAGE_SUCCESS = 'DIALOGS/SEND_MESSAGE_SUCCESS';
const PUT_UP_DIALOG = 'DIALOGS/PUT_UP_DIALOG';
const SET_CURRENT_DIALOG = 'DIALOGS/SET_CURRENT_DIALOG';

let initialState = {
    dialogs: [],
    messages: [],
    selectedDialogId: null
};

const update = (state, action) => {
    return  {...state, ...action.payload}
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIALOGS_SUCCESS:
        case SET_CURRENT_DIALOG:
        case GET_MESSAGES_SUCCESS: return update(state, action);
        case PUT_UP_DIALOG:
            return {
                ...state,
                dialogs: [state.dialogs.find(d => d.id == action.userId),
                    ...state.dialogs.filter(d => d.id != action.userId)]
            };
        case SEND_MESSAGE_SUCCESS:
            return {...state, messages: [...state.messages, action.message]};
        default:
            return state;
    }
    return state;
};
export const getDialogsSuccess = (dialogs) => ({type: GET_DIALOGS_SUCCESS, payload: {dialogs}});
export const sendMessageSuccess = (message) => ({type: SEND_MESSAGE_SUCCESS, message});
export const getMessagesSuccess = (messages) => ({type: GET_MESSAGES_SUCCESS, payload: {messages}});
export const setCurrentDialog = (selectedDialogId) => ({type: SET_CURRENT_DIALOG, payload: {selectedDialogId}});
export const putUpDialog = (userId) => ({type: PUT_UP_DIALOG, userId});

export const sendMessage = (userId, body) => async (dispatch) => {
    let result = await dialogsAPI.sendMessage(userId, body);
    if (result.resultCode===0) {
            dispatch(sendMessageSuccess(result.data.message))
    } //else пишем месагу об ошибке =  ты в спаме и т. п.
};

export const getDialogs = () =>async (dispatch) => {
    let dialogs= await dialogsAPI.getDialogs();
        dispatch(getDialogsSuccess(dialogs))
};

export const startDialog = (userId) => async (dispatch, getState) => {
    let dialog = getState().dialogs.dialogs.find(d => d.id == userId);
    await dialogsAPI.startDialog(userId)
    if (dialog) {
        dispatch(putUpDialog(userId))
    } else {
        dispatch(getDialogs())
    }
};

export const getMessages = (userId) =>async (dispatch) => {
    let messages= await dialogsAPI.getMessages(userId);
                dispatch(getMessagesSuccess(messages));
                //dispatch(setCurrentDialog(userId));
};
export const getCurrentDialog = (userId) => (dispatch) => {
    dialogsAPI.getMessages(userId)
        .then(res => {
                dispatch(setCurrentDialog(userId));
            }
        )
};


//1-31-25
export const addMessageActionCreator = (newMessageElement) => ({type: ADD_MESSAGE, newMessageElement});

export const init=(userId)=> async (dispatch)=>{
    if (!!userId) {
        dispatch(getMessages(userId));
        dispatch(setCurrentDialog(userId));
        await dispatch(startDialog(userId))
            dispatch(getDialogs());
    } else {
    dispatch(getDialogs());
    }
};
export const updateDialog=(userId)=> (dispatch)=>{
    if (!!userId) {
        dispatch(getMessages(userId));
        dispatch(setCurrentDialog(userId))
    } else {
        dispatch(setCurrentDialog(null))
    }
}
export default dialogsReducer;

/*
 {id: 0, ava: 'https://cs.pikabu.ru/post_img/2013/12/02/8/1385985936_1683907691.jpg', name: 'Jack'},
        {id: 1, ava: 'http://windoworld.ru/avatars/cinema/su/200/b6.jpg', name: 'Patrick'},
        {id: 2, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRw2pGdQKOjGCmNakeFB6RmZ43oetjTRl12jhzJTZ9VQjJnbxB', name: 'Kostya'},
        {id: 3, ava: 'http://windoworld.ru/avatars/cinema/su/200/b5.jpg', name: 'Josy'}

         {id: 0, ava: 'https://cs.pikabu.ru/post_img/2013/12/02/8/1385985936_1683907691.jpg', message: 'Hi!'},
        {id: 1, ava: 'http://windoworld.ru/avatars/cinema/su/200/b6.jpg', message: 'How are You?'},
        {
            id: 2,
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRw2pGdQKOjGCmNakeFB6RmZ43oetjTRl12jhzJTZ9VQjJnbxB',
            message: 'Yo!'
        },
        {id: 3, ava: 'http://windoworld.ru/avatars/cinema/su/200/b5.jpg', message: 'I do, yes, I do!'}

                  {id: 4,
                    ava: 'https://cs.pikabu.ru/post_img/2013/12/02/8/1385985936_1683907691.jpg',
                    message: newMessage}]
 */