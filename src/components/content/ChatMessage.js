import React from 'react'

class ChatMessage extends React.Component {
    render() {
        let classList = 'chat-message';

        const {chatId, sender, text} = this.props;

        if (sender === 'Operator') {
            classList += ' sent';
        }

        return (
            <div className={classList}>
                {text}
            </div>
        )
    }
}

export default ChatMessage
