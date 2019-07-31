import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem=(props)=>{

  let path='/dialogs/'+props.id;
  return <div className={s.dialogUserInfo}>
      <img src={props.ava} className={s.img}/>
      <NavLink to={path}>{props.name}</NavLink>
  </div>
};

export default DialogItem;