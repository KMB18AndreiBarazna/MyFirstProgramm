import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./Message/AddMessageForm";

const Dialogs = (props) => {
    //debugger;
    let dialogsElements = props.dialogs.map(d =>
            <DialogItem ava={d.ava} name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m =>
            <Message ava={m.ava} message={m.message} id={m.id}/>);
    let newMessageElement = React.createRef();


if (!props.isAuth) return <Redirect to={'/login'}/>;


    let addNewMessage=(values)=> {
        props.addMessage(values.newMessageElement)
    };

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <h3>Users</h3>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <h3>Messages</h3>
                    <div>{messagesElements}</div>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
    )
};


export default Dialogs;