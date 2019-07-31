import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={s.profileWrapper}>
              <img src={props.profile.photos.large} />
              <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
              <div>aboutMe===> {props.profile.aboutMe}</div>
              <div>lookingForAJob===> {props.profile.lookingForAJob===true ? "Yes" : "No"}</div>
              <div>lookingForAJobDescription===> {props.profile.lookingForAJobDescription}</div> 
              <div>userId===> {props.profile.userId}</div>
    </div>
};

export default ProfileInfo;

/* <li>Место рождения: где-то далеко отсюда;</li>
                <li>Дата рождения: много воды с тех пор утекло;</li>
                <li>Оптимист, трудоголик ;-)</li>
  <p className={s.infoAvatar}> Robinson Kruzo</p>
            <ul className={s.definAvatar}>

            </ul>
          <div className={s.imgWrapper}>
            <img src='http://uchitel-slovesnosti.ru/990/093/181.jpg' className={s.avatar}/>
        </div>
                */