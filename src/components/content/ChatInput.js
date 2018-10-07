import React from 'react'
import ARMApi from "../../utils/arm.api";

class ChatInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.message = null;
    }

    handleMessageChange(event) {
        this.message = event.target.value;
    }

    handleSubmit(event, chatId) {
        event.preventDefault();
        ARMApi
            .sendMessage(chatId, this.message)
            .then(result => {
                debugger
            })
            .catch(e => {
                debugger
            })
    }


    render() {

        const {selectedId} = this.props;
        return (
            <form className="chat__message-form" onSubmit={(e) => this.handleSubmit(e, selectedId)}>
            <textarea className="chat__message-field" name="" id="" cols="30" rows="10"
                      placeholder="Напишите сообщение..." onChange={(e) => this.handleMessageChange(e)}></textarea>
                <button className="chat__send-btn">Отправить</button>
            </form>
        )
    }
}

export default ChatInput
