import React from 'react';
import ChatMessages from "./ChatMessages";
import ChatForm from "./ChatForm";
import ARMApi from "../../utils/arm.api";

class Chat extends React.Component {

    componentDidUpdate() {
        const {messages, setHints} = this.props;

        if (messages.length > 0) {
            if (messages[messages.length - 1].sender === 'Client') {
                const message = messages[messages.length - 1];
                ARMApi.getHints(message.text)
                    .then((answers)=> {
                        const receivedHints = answers.Answer
                        debugger
                        setHints(receivedHints);
                    })
                    .catch((e)=> {
                        setHints([]);
                    })
            }
        }
    }


    render() {
        const {messages, hints, selectedId} = this.props;
        if (!messages) {
            return [];
        }

        debugger
        return (
            <div className="chat">
                <ChatMessages messages={messages}/>
                <ChatForm selectedId={selectedId} hints={hints}/>
            </div>
        )
    }

}

export default Chat
