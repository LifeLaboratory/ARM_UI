import {connect} from 'react-redux'
import Chat from "../components/content/Chat";

const mapStateToProps = state => {
    const {chatListReducer} = state;
    const {chatReducer} = state;
    const {chats} = chatListReducer[chatListReducer.openedCategory];
    const {hints, messages} = chatReducer;
    const {selectedId} = chatListReducer;
    const props = {};
    if (selectedId && chats && chats.some(chat => chat.id === selectedId) && messages.some(message => message.chatId === selectedId)) {
        const filteredMessages = messages.filter(message => message.chatId === selectedId);
        props.dialog = {
            selectedId,
            messages: filteredMessages,
            hints
        }
    }
    return props;
};

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)
