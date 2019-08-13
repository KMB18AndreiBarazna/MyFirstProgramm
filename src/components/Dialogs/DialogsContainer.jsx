import React from 'react';
import {updateDialog, init, sendMessage} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Dialogs from "./Dialogs";

class DialogsContainer extends React.Component {

    componentDidMount() {
        this.props.init(this.props.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userId !=this.props.userId) {
        this.props.updateDialog(this.props.userId)
        }
    }
    render() {
        return (
            <Dialogs {...this.props}/>
        );
    }
};
let mapStateToProps = (state, props) => {
    return {
        dialogs: state.dialogs.dialogs,
        messages: state.dialogs.messages,
        selectedDialogId: state.dialogs.selectedDialogId,
        newMessage: state.newMessage,
        userId: props.match.params.userId
    }
};

export default compose(withRouter, connect(mapStateToProps, {init, updateDialog, sendMessage}), withAuthRedirect)
    (DialogsContainer);
