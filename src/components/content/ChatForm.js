import React from 'react'
import ChatHints from "./ChatHints";
import ChatInput from "./ChatInput";

class ChatForm extends React.Component {
    render() {
        const {hints,selectedId} = this.props;
        return (
            <div className="chat__form-container">
                <ChatHints hints={hints}/>
                <ChatInput selectedId={selectedId}/>
            </div>
        )
    }
}

export default ChatForm
