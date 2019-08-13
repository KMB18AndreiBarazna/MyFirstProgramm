import React from 'react';
import s from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost.jsx";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10=maxLengthCreator(10);
let AddNewPostForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea}
                       placeholder={'Да post-уй уже'}
                validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};
let AddNewPostFormRedux= reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);
const MyPosts = (props) => {
    let postsElements=props.posts.map(p=>
        <MyPost message={p.message} id={p.id} likesCount={p.likesCount}/>);
     let onAddPost= (values)=> {
         props.addPost(values.newPostText);
     };
    return <div className={s.myposts}>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
                    <div >
                        {postsElements}
                    </div>
     </div>
};

 export default MyPosts;