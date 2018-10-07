import {connect} from 'react-redux'
import Chat from "../components/content/Chat";
import {setHints} from "../actions/chatActions";

const mapStateToProps = state => {
    const {chatListReducer} = state;
    const {chatReducer} = state;
    const {chats} = chatListReducer[chatListReducer.openedCategory];
    const {hints, messages} = chatReducer;
    const {selectedId} = chatReducer;
    return {messages, hints, selectedId};
};

const mapDispatchToProps = dispatch => ({
    setHints: (hints) => dispatch(setHints(hints))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)
