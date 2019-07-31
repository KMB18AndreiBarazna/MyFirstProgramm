const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState={
    dialogs: [
        {id: 0, ava: 'https://cs.pikabu.ru/post_img/2013/12/02/8/1385985936_1683907691.jpg', name: 'Jack'},
        {id: 1, ava: 'http://windoworld.ru/avatars/cinema/su/200/b6.jpg', name: 'Patrick'},
        {id: 2, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRw2pGdQKOjGCmNakeFB6RmZ43oetjTRl12jhzJTZ9VQjJnbxB', name: 'Kostya'},
        {id: 3, ava: 'http://windoworld.ru/avatars/cinema/su/200/b5.jpg', name: 'Josy'}
    ],
    messages: [
        {id: 0, ava: 'https://cs.pikabu.ru/post_img/2013/12/02/8/1385985936_1683907691.jpg', message: 'Hi!'},
        {id: 1, ava: 'http://windoworld.ru/avatars/cinema/su/200/b6.jpg', message: 'How are You?'},
        {
            id: 2,
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRw2pGdQKOjGCmNakeFB6RmZ43oetjTRl12jhzJTZ9VQjJnbxB',
            message: 'Yo!'
        },
        {id: 3, ava: 'http://windoworld.ru/avatars/cinema/su/200/b5.jpg', message: 'I do, yes, I do!'}
    ]
};

const  dialogsReducer=(state=initialState, action) =>{
    if (action.type === ADD_MESSAGE) {
        let newMessage = action.newMessageElement;
        return {
            ...state,
            messages: [...state.messages,
                {id: 4,
                    ava: 'https://cs.pikabu.ru/post_img/2013/12/02/8/1385985936_1683907691.jpg',
                    message: newMessage}]
        };
        return state;
    }
    return state;
};

export const addMessageActionCreator = (newMessageElement) => ({type: ADD_MESSAGE, newMessageElement});

export default dialogsReducer;