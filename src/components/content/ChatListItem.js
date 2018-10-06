import React from 'react'

class ChatListItem extends React.Component {
    render() {
        let classList = 'chat-list-item chat-list__item';
        if (this.props.active) {
            classList += ' active';
        }

        return (
            <div className={classList} >
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
