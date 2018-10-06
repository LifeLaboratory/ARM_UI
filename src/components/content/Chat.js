import React from 'react';

class Chat extends React.Component {
    render() {
        const {selectedId} = this.props;
        if (!selectedId) {
            console.log('asdsdfsd')
            return [];
        }

        return <div className="chat">To render</div>
    }

}

export default Chat
