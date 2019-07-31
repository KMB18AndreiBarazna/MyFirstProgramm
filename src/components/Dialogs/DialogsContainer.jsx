import {addMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps=(state)=> {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage
    }
};

let mapDispatchToProps=(dispatch)=>{
  return {
      addMessage: (newMessageElement)=>{
            dispatch(addMessageActionCreator(newMessageElement))
      }
  }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
    (Dialogs);