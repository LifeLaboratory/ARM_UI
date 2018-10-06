import React from 'react'
import ChatHints from "./ChatHints";
import ChatInput from "./ChatInput";

class ChatForm extends React.Component {
    render() {
        const {hints} = this.props;
        return (
            <div className="chat__form-container">
                <ChatHints hints={hints}/>
                <ChatInput/>
            </div>
        )
    }
}

export default ChatForm
