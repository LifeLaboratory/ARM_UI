import React from 'react';
import ChatMessage from "./ChatMessage";
import ChatHint from "./ChatHint";

class Chat extends React.Component {
    render() {

        return (<div></div>
           {/* <div className="chat">
                <div className="chat__messages">
                    {messages.map(message => {
                        return (
                            <ChatMessage type={message.type} text={message.text}/>
                        )
                    })}
                </div>

                <div className="chat__form-container">

                    <div className="chat__hints-container">
                        {hints.map(hint => {
                            return (
                                <ChatHint text={hint}/>
                            )
                        })}
                    </div>

                    <form className="chat__message-form" action="">
                        <textarea className="chat__message-field" name="" id="" cols="30" rows="10"
                                  placeholder="Напишите сообщение..."></textarea>
                        <button className="chat__send-btn">Отправить</button>
                    </form>
                </div>
            </div>*/}

        )
    }

}

export default Chat
