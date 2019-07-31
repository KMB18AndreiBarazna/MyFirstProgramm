import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    //debugger;
    return <div>
        <div >
            <img src='https://static5.depositphotos.com/1038117/449/i/450/depositphotos_4492222-stock-photo-sand-of-beach-caribbean-sea.jpg' className={`${s.content} ${s.img}`}/>
        </div>
        <ProfileInfo profile={props.profile}
                             status={props.status}
                             updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
};

export default Profile;
