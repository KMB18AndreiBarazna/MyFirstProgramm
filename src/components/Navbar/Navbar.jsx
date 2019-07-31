import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "./FriendsContainer";
import Users from "../Users/Users";

const Navbar = () => {
    //debugger;
    return (
        <div>
            <nav className={s.nav}>
                <div>
                    <NavLink to='/profile' className={s.noneDec} activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' className={s.noneDec} activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to='/users' className={s.noneDec} activeClassName={s.activeLink}>Users</NavLink>
                </div>
                <div>
                    <NavLink to='/news' className={s.noneDec} activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/music' className={s.noneDec} activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings' className={s.noneDec} activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </nav>
        </div>
    )
};
/*friends={props.friends}*/
export default Navbar;