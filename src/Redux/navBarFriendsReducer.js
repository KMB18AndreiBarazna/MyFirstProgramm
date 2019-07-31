

let initialState={
    friends: [
        {id: 1, ava: 'http://windoworld.ru/avatars/cinema/su/200/b6.jpg', name: 'Patrick'},
        {
            id: 2,
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRw2pGdQKOjGCmNakeFB6RmZ43oetjTRl12jhzJTZ9VQjJnbxB',
            name: 'Kostya'
        },
        {id: 3, ava: 'http://windoworld.ru/avatars/cinema/su/200/b5.jpg', name: 'Josy'}
    ]
};

const  navBarFriendsReducer=(state=initialState, action) =>{

    return state
};

export default navBarFriendsReducer;