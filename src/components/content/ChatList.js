import React from 'react'
import ChatListItem from "./ChatListItem";

class ChatList extends React.Component {
    render() {
        const activeChats = [
            {
                name: 'Иван Василичъ',
                date: '06.10.2018',
                text: 'ПАМАГИТЕ! Не работает!!'
            },
            {
                name: 'Василий Иваныч',
                date: '06.10.2018',
                text: 'алло! Ответь!',
            },
            {
                name: 'Инокентий',
                date: '06.10.2018',
                text: 'ВСЕ СЛОМАЛОСЬ! СРОЧНО!'
            }
        ];

        const archiveChats = [
            {
                name: 'Иван Василичъ',
                date: '06.10.2018',
                text: 'ПАМАГИТЕ! Не работает!!'
            },
            {
                name: 'Василий Иваныч',
                date: '06.10.2018',
                text: 'алло! Ответь!'
            },
            {
                name: 'Инокентий',
                date: '06.10.2018',
                text: 'ВСЕ СЛОМАЛОСЬ! СРОЧНО!'
            }
        ];

        let selectedChat = 1;

        return (
            <div className="chat-list">

                <div className="chat-list__category-container">
                    <div className="chat-list__category active">Открытые</div>
                    <div className="chat-list__category">Архив</div>
                </div>

                {activeChats.map((chat, index) => {
                    console.log(selectedChat === index);
                    return (


                        <ChatListItem id={index} active={selectedChat === index} name={chat.name} date={chat.date} text={chat.text}/>
                    )
                })}

            </div>
        )
    }

}

export default ChatList
