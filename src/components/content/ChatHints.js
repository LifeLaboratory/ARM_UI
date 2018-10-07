import React from 'react'
import ChatHint from "./ChatHint";

class ChatHints extends React.Component {
    render() {
        const {hints} = this.props;
        return (
            <div className="chat__hints-container">
                {hints.map((hint, index) => <ChatHint text={hint} key={index}/>)}
            </div>
        )
    }
}

export default ChatHints
