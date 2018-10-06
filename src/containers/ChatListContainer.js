import {connect} from 'react-redux'
import ChatList from "../components/content/ChatList";
import {openChat, selectArchived, selectOpened} from "../actions/chatListActions";

const mapStateToProps = state => {
    const {chatListReducer} = state;
    const {chats} = chatListReducer[chatListReducer.openedCategory];
    const {selectedId} = chatListReducer;
    const {openedCategory} = chatListReducer;
    return {chats, selectedId, openedCategory}
};

const mapDispatchToProps = dispatch => ({
    openChat: chatId => dispatch(openChat(chatId)),
    selectOpened: () => dispatch(selectOpened()),
    selectArchived: () => dispatch(selectArchived())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatList)
