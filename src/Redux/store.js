import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navBarFriendsReducer from "./navBarFriendsReducer";

/*let store = {
    _state: {
        navBarFriends: {
            friends: [
                {id: 1, ava: 'http://windoworld.ru/avatars/cinema/su/200/b6.jpg', name: 'Patrick'},
                {
                    id: 2,
                    ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRw2pGdQKOjGCmNakeFB6RmZ43oetjTRl12jhzJTZ9VQjJnbxB',
                    name: 'Kostya'
                },
                {id: 3, ava: 'http://windoworld.ru/avatars/cinema/su/200/b5.jpg', name: 'Josy'}
            ]
        },
        profilePage: {
            posts: [
                {id: 0, message: 'Океан. Безкрайняя водная гладь, искрящая под палящими лучами Солнца...', likesCount: 3},
                {id: 1, message: 'Земля. Леса да поля. На тебе жилье строим и сеем...', likesCount: 5},
                {id: 2, message: 'Делу время, потехе - час!', likesCount: 1},
                {id: 3, message: 'Кто утром рано встает - тому Бог подает!', likesCount: 0}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 0, ava: 'https://cs.pikabu.ru/post_img/2013/12/02/8/1385985936_1683907691.jpg', name: 'Jack'},
                {id: 1, ava: 'http://windoworld.ru/avatars/cinema/su/200/b6.jpg', name: 'Patrick'},
                {
                    id: 2,
                    ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRw2pGdQKOjGCmNakeFB6RmZ43oetjTRl12jhzJTZ9VQjJnbxB',
                    name: 'Kostya'
                },
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
            ],
            newMessage: ''
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this._state.navBarFriends=navBarFriendsReducer(this._state.navBarFriends, action);

        this._callSubscriber(this._state);
    }
};


export default store;     */