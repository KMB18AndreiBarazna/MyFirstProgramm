import React from 'react';
import s from './../Dialogs.module.css';

const Message=(props)=>{
    return(
    <div className={s.dialogMessageInfo}>
        <img src={props.ava} className={s.img}/>
        <p className={s.message}>{props.message}</p>
    </div>
    )
};

export default Message;