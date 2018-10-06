import React from 'react'
import SidebarItemList from "./SidebarItemList";
import PropTypes from 'prop-types';

class SidebarItemsBlock extends React.Component {

    render() {
        const {items, onSwitchAfk} = this.props;
        return (
            [<SidebarItemList onSwitchAfk={onSwitchAfk} key="itemList" items={items}/>,
                <hr key="separator"/>]
        )
    }
}
/*
SidebarItemsBlock.propTypes = {
    id: PropTypes.instanceOf(Iterable),
    items: PropTypes.instanceOf(Iterable)
};
*/


export default SidebarItemsBlock

