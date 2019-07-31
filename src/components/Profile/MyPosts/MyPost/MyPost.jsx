import React from 'react';
import s from './MyPost.module.css';

const MyPost = (props) => {
    return <div className={s.item}>
        {props.message}
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>
};

export default MyPost;