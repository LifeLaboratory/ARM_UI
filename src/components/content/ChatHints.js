import React from 'react'
import ChatHint from "./ChatHint";

class ChatHints extends React.Component {
    render() {
        let {hints} = this.props;
        if(!hints) {
            hints = [];
        }
        return (
            <div className="chat__hints-container">
                {hints.map((hint, index) => <ChatHint text={hint} key={index}/>)}
            </div>
        )
    }
}

export default ChatHints
