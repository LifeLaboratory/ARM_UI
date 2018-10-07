import {connect} from 'react-redux'
import ChatList from "../components/content/ChatList";
import {openChat, selectArchived, selectOpened, setActiveChats, setArchivedChats} from "../actions/chatListActions";

const mapStateToProps = state => {
    const {chatListReducer} = state;
    const {authReducer} = state;
    const {auth} = authReducer;
    const {session} = auth;
    const chats = chatListReducer[chatListReducer.openedCategory];
    const {selectedId} = chatListReducer;
    const {openedCategory} = chatListReducer;
    return {chats, selectedId, openedCategory, session}
};

const mapDispatchToProps = dispatch => ({
    openChat: (chatId, messages) => dispatch(openChat(chatId, messages)),
    selectOpened: () => dispatch(selectOpened()),
    selectArchived: () => dispatch(selectArchived()),
    setArchivedChats: (chats) => dispatch(setArchivedChats(chats)),
    setActiveChats: (chats) => dispatch(setActiveChats(chats)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatList)
