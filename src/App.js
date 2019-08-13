import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import FriendsContainer from "./components/Navbar/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/common/Preloader/preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    };
    render() {
        if (!this.props.initialized) {return <Preloader/>};
        return (
            <div className="app">
                <HeaderContainer/>
                <div>
                    <Navbar/>
                    <FriendsContainer/>
                </div>
                <div className='app-content'>
                    <Route path='/dialogs/:userId?' render={() => <DialogsContainer />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
};
const mapStateToProps=(state)=> ({
    initialized: state.app.initialized
})

export default compose(
    withRouter, connect(mapStateToProps, {initializeApp})) (App);
