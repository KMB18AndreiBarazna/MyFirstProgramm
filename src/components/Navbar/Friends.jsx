import React from 'react';
import Friend from "./Friend";

const Friends = (props) => {
    let friends =props.friends.map( (item) => {
        return <Friend id={item.id} ava={item.ava} name={item.name}/>
    } );
    return (
        <div>
            {friends}
        </div>)
};

export default Friends;