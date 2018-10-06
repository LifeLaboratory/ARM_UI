import React from 'react'
import ChatHint from "./ChatHint";

class ChatHints extends React.Component {
    render() {
        const {hints} = this.props;
        return (
            <div className="chat__hints-container">
                {hints.map(hint => <ChatHint text={hint}/>  )}
            </div>
        )
    }
}

export default ChatHints
