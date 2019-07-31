import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.titul}>
            <img src='http://kacharent.ru/images/stories/logotip/logo_cacharent.jpg' className={s.img}/>
            <span>По острову! - Каждому!!! ;-)</span>
        </div>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
};

export default Header;