import React from 'react';

class ChatCategoryButton extends React.Component {


    render() {
        const {selected, value, clickHandler} = this.props;

        let classList = 'chat-list__category';

        if (selected) {
            classList += ' active'
        }
        return (<div className={classList} onClick={() => clickHandler()}>{value}</div>)
    }
}

export default ChatCategoryButton
