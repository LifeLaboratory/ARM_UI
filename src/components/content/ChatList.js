import React from 'react'
import ChatListItem from "./ChatListItem";
import ChatCategoryButton from "./ChatCategoryButton";

class ChatList extends React.Component {

    render() {

        const {chats, openChat, selectedId, selectOpened, selectArchived, openedCategory} = this.props;

        return (
            <div className="chat-list">
                <div className="chat-list__category-container">
                    <ChatCategoryButton clickHandler={selectOpened} selected={openedCategory === 'activeChats'}
                                        value={"Открытые"}/>
                    <ChatCategoryButton clickHandler={selectArchived} selected={openedCategory === 'archivedChats'}
                                        value={"Архив"}/>
                </div>
                {
                    chats.map((chat) => {
                        return (
                            <ChatListItem
                                id={chat.id}
                                key={chat.id}
                                name={chat.name}
                                date={chat.date}
                                text={chat.text}
                                clickHandler={openChat}
                                selected={selectedId === chat.id}
                            />
                        )
                    })
                }

            </div>
        )
    }
}

export default ChatList
