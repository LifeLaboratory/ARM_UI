import React from 'react'
import ChatListItem from "./ChatListItem";
import ChatCategoryButton from "./ChatCategoryButton";
import ARMApi from "../../utils/arm.api";

class ChatList extends React.Component {

    componentDidMount() {
        const {session, setActiveChats, setArchivedChats} = this.props;
        ARMApi.getChats(session)
            .then(result => {
                console.log(result);
                const respChats = result.Data;
                const chats = respChats.map(respChat => {
                    return {
                        id: respChat.id_chat,
                        name: respChat.Name,
                        date: respChat.Data.substring(0, 10),
                        text: respChat.Text
                    }
                });
                setActiveChats(chats);
            })
            .catch(err => {
                console.error(err);
            })
    }
/*
*
*
* Data: "2018-10-06 10:55:13.402839"
Text: null
id_chat: "vk|18570334"
id_client: "vk|18570334"*/
    render() {

        const {session, chats, openChat, selectedId, selectOpened, selectArchived, openedCategory} = this.props;

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
                                session={session}
                                selected={selectedId === chat.id}/>
                        )
                    })
                }

            </div>
        )
    }
}

export default ChatList
