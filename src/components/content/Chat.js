import React from 'react';
import ChatMessages from "./ChatMessages";
import ChatForm from "./ChatForm";

class Chat extends React.Component {
    render() {
        const {dialog} = this.props;

        if (!dialog) {
            return [];
        }

        const {messages, hints} = dialog;
        return (
            <div className="chat">
                <ChatMessages messages={messages}/>
                <ChatForm hints={hints}/>
            </div>
        )
    }

}

export default Chat
