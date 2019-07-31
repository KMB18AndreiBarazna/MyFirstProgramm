import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Navbar/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/login";

const App = () => {
     //debugger;
    return (
            <div className="app">
                <HeaderContainer/>
                <div>
                    <Navbar/>
                    <FriendsContainer/>
                </div>
                <div className='app-content'>
                    <Route path='/dialogs' render={()=><DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={()=><ProfileContainer/>}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/settings' render={()=><Settings/>}/>
                    <Route path='/login' render={()=><LoginPage/>}/>
                </div>
            </div>
    );
};

export default App;
