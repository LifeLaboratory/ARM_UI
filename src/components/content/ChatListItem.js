import React from 'react'

class ChatListItem extends React.Component {
    render() {
        return (
            <div className="chat-list-item chat-list__item">
                <div className="chat-list-item__head">
                    <div className="chat-list-item__name">{this.props.name}</div>
                    <div className="chat-list-item__date">{this.props.date}</div>
                </div>
                <div className="chat-list-item__last-message">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default ChatListItem
