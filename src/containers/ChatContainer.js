import {connect} from 'react-redux'
import Chat from "../components/content/Chat";

const mapStateToProps = state => {
    const {chatListReducer} = state;
    const {chatReducer} = state;
    const {chats} = chatListReducer[chatListReducer.openedCategory];
    const {hints, messages} = chatReducer;
    const {selectedId} = chatListReducer;
    const props = {};
    return {messages, hints};
};

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)
