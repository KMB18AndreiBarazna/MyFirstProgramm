import React from 'react';
import s from './users.module.css';
import userPhotoEmpty from '../../images/avatarka2.jpg'
import {NavLink} from "react-router-dom";


let Users=(props)=>{
    let pagesCount =Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

 return <div>
     <div>
         {pages.map(p => {
             return <button className={props.currentPage===p&&s.selectedPage}
                          onClick={(e)=>{props.onPageChanged(p)}}>{p}</button>

         })}
     </div>
     {props.users.map(u => <div key={u.id}>
        <span>
           <div>
               <NavLink to={`/profile/${u.id}`}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhotoEmpty} className={s.img}/>
               </NavLink>
           </div>
           <div>
                {u.followed
                    ? <button disabled={props.followingInProgress.some(id=>id===u.id)}
                          onClick={() => {props.unfollow(u.id)}} className={s.btnUnF}>Unfollow</button>

                    : <button disabled={props.followingInProgress.some(id=>id===u.id)}
                          onClick={() => {props.follow(u.id)}} className={s.btnF}>Follow</button>};
           </div>
        </span>
         <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{u.id}</div>
         </span>
     </div>)
     }
 </div>
}

export default Users;
/*
[
                    {id: 0, photoUrl: 'http://windoworld.ru/avatars/cinema/su/200/b6.jpg', followed: false, fullname: 'Henry', status: 'Working..', location: {city: 'London', country: 'Great' +
                                ' Britain'}},
                    {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRw2pGdQKOjGCmNakeFB6RmZ43oetjTRl12jhzJTZ9VQjJnbxB', followed: false, fullname: 'Max', status: 'Relaxing..', location: {city: 'New York', country: 'USA'}},
                    {id: 2, photoUrl: 'http://windoworld.ru/avatars/cinema/su/200/b5.jpg', followed: true, fullname: 'Paco', status: 'looking..', location: {city: 'Torino', country: 'Italy'}},
                    {id: 3, photoUrl: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-b285c17814493d17b233eec6107aade2.png', followed: false, fullname: 'Daniel', status: 'Cherchez la femme..', location: {city: 'Paris', country: 'France'}},
                    {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrMBuEHDH0XemUUKoGN8QnybXHun9dVu1DOCMhbxr13Wpm9RVzA', followed: false, fullname: 'Mary', status: 'learning..', location: {city: 'St. Petersburg', country: 'Russia'}},
                    {id: 5, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDN9BdA2_JdUHxx6OUHn0YV7cNWI3btYwmkhoWf7omQ0hb5PWc', followed: true, fullname: 'Serge', status: 'Trading..', location: {city: 'Odessa', country: 'Ukrain'}},
                    {id: 6, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCiZGRxqU9PRhfSueYHazQcbAfhjXMQu-eUxUvkn6cgQB-mK3nQ', followed: true, fullname: 'Vladimir', status: 'Science..', location: {city: 'Minsk', country: 'Belarus'}}
                ]
 */