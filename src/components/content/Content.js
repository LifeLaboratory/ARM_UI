import React from 'react'
import ChatListContainer from "../../containers/ChatListContainer";
import ChatContainer from "../../containers/ChatContainer";
import Chat from "./Chat";

class Content extends React.Component {
    render() {

        return (
            <div className="content-container">
                <ChatListContainer/>
                <ChatContainer/>
            </div>
        )
    }

}

export default Content
