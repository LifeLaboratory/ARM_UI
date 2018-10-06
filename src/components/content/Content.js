import React from 'react'
import ChatList from "./ChatList";
import Chat from "./Chat";
import ChatListContainer from "../../containers/ChatListContainer";

class Content extends React.Component {
    render() {

        return (
            <div className="content-container">
                <ChatListContainer/>
            </div>
        )
    }

}

export default Content
