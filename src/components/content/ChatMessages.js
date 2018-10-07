import React from 'react';
import ChatMessage from "./ChatMessage";

class ChatMessages extends React.Component {
    render() {

        const {messages} = this.props;
debugger
        return (
           <div className="chat__messages">
               {messages.map(message => {
                   return <ChatMessage key={message.id} chatId={message.id} sender={message.sender} text={message.text}/>
               })}
           </div>
       )
    }
}

export default ChatMessages
