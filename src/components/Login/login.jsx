import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../Header/Header.module.css'

const Loginform= (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                           component={Input}
                           name={'email'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       component={Input}
                       name={'password'}
                       type={'password'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type={'checkbox'}
                          component={Input}
                         name={'rememberMe'}
                /> remember me
            </div>
            {props.error&&<div className={s.someError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
)
};
const LoginReduxForm=reduxForm({
    form: 'login'
}) (Loginform);

const Login= (props) => {
    const onSubmit=(formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps=(state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);