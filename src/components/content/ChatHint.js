import React from 'react'

class ChatHint extends React.Component {
    render() {
        let classList = 'chat-message';

        if (this.props.type === 'sent') {
            classList += ' sent';
        }

        return (
            <div className="chat-hint">
                <div className="chat-hint__text">{this.props.text}</div>
                <div className="chat-hint__reject-btn"></div>
            </div>
        )
    }
}

export default ChatHint
