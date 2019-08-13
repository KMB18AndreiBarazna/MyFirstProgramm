import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {NavLink, Redirect} from "react-router-dom";
import AddMessageForm from "./Message/AddMessageForm";
import {dialogsAPI} from "../../api/api";
import {connect} from "react-redux";
import {getDialogs} from "../../Redux/dialogsReducer";


let Dialogs = (props) => {
    debugger
    let messageRef = React.createRef();
    let sendMessage = () => {
        props.sendMessage(props.selectedDialogId, messageRef.current.value)
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h3>Users</h3>
                <div>
                    {props.dialogs.map(d => <div key={d.id}>
                        <NavLink to={`/dialogs/${d.id}`}>{d.userName} </NavLink>
                    </div>)}
                </div>
            </div>
            <div className={s.messages}>
                <h3>Messages</h3>
                <div>
                    {props.messages.map(m => {
                        return <div>{m.body} </div>
                    })}
                </div>
                {!props.selectedDialogId && <div>Please select dialog</div>}
                {props.selectedDialogId && <div>
                    <textarea ref={messageRef}/>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>}
            </div>
        </div>
    )
};

export default Dialogs;

// <DialogItem ava={d.ava} name={d.name} id={d.id}/>);
//     <Message ava={m.ava} message={m.message} id={m.id}/>);
{/*
    let addNewMessage=(values)=> {
        props.addMessage(values.newMessageElement)
    };
 <AddMessageForm onSubmit={addNewMessage}/>
<div>
    <div>
        {props.dialogs.map(d =><div>{d.title} </div>)};
    </div>
    let messagesElements = props.messages.map(m =>
    <Message ava={m.ava} message={m.message} id={m.id}/>);
    let newMessageElement = React.createRef();
</div>*/
}