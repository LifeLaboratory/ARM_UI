import React from 'react';
import ChatMessages from "./ChatMessages";
import ChatForm from "./ChatForm";

class Chat extends React.Component {
    render() {
        const {messages, hints} = this.props;

        if (!messages) {
            return [];
        }
        return (
            <div className="chat">
                <ChatMessages messages={messages}/>
                <ChatForm hints={hints}/>
            </div>
        )
    }

}

export default Chat
