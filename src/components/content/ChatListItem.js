import React from 'react'

class ChatListItem extends React.Component {
    render() {
        let classList = 'chat-list-item chat-list__item';

        const {id, clickHandler, selected} = this.props;

        if (selected) {
            classList += ' active';
        }

        return (
            <div className={classList} onClick={() => {console.log('1');clickHandler(id)}} >
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
