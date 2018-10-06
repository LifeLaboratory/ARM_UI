import React from 'react'

class ChatInput extends React.Component {
    render() {
        return (
                <form className="chat__message-form" action="">
            <textarea className="chat__message-field" name="" id="" cols="30" rows="10"
                      placeholder="Напишите сообщение..."></textarea>
                    <button className="chat__send-btn">Отправить</button>
                </form>
        )
    }
}

export default ChatInput
