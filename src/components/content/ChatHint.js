import React from 'react'

class ChatHint extends React.Component {
    render() {
        return (
            <div className="chat-hint">
                <div className="chat-hint__text">{this.props.text}</div>
                <div className="chat-hint__reject-btn"></div>
            </div>
        )
    }
}

export default ChatHint
