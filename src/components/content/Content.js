import React from 'react'
import ChatListContainer from "../../containers/ChatListContainer";
import ChatContainer from "../../containers/ChatContainer";
import Chat from "./Chat";
import Cabinet from "./Cabinet";

class Content extends React.Component {
    render() {

        return (
            <div className="content-container">
                    {/*<ChatListContainer/>
                    <ChatContainer/>*/}

                    <Cabinet/>
            </div>
        )
    }

}

export default Content
