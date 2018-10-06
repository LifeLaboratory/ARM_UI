import React from 'react'

class ChatMessage extends React.Component {
    render() {
        let classList = 'chat-message';

        if (this.props.type === 'sent') {
            classList += ' sent';
        }

        return (
            <div className={classList}>
                {this.props.text}
            </div>
        )
    }
}

export default ChatMessage
