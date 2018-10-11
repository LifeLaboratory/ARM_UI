import React from 'react'
import ARMApi from "../../utils/arm.api";

class ChatListItem extends React.Component {
    render() {
        let classList = 'chat-list-item chat-list__item';

        const {id, clickHandler, selected, session} = this.props;

        if (selected) {
            classList += ' active';
        }
        return (
            <div className={classList} onClick={() => {
                ARMApi.getDialog(session, id)
                    .then(dialog => {
                        const messages = dialog.Data.map((message, index) => {
                            return {
                                id: index,
                                chatId: message.id_chat,
                                text: message.Text,
                                sender: message.Sender
                            }
                        });
                        clickHandler(id, messages)
                    })
                    .catch((dialog) => {
                        console.log(dialog)
                    })
            }}>
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
