import React from 'react'
import ChatList from "./ChatList";
import Chat from "./Chat";

class Content extends React.Component {
    render() {
        const data = [

        ];

        return (
            <div className="content-container">

                <ChatList/>
                <Chat/>
            </div>
        )
    }

}

export default Content
