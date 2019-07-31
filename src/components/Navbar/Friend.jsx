import React from 'react';
import s from './Navbar.module.css';


const Friend = (props) => {
    return <div>
        <img src={props.ava} className={s.friends} alt=""/>
        <p>{props.name}</p>
    </div>
};

export default Friend;