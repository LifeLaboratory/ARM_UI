import React from 'react'
import SidebarItemList from "./SidebarItemList";
import PropTypes from 'prop-types';

class SidebarItemsBlock extends React.Component {

    render() {
        const {items} = this.props;

        return (
            [<SidebarItemList key="itemList" items={items}/>,
                <hr key="separator"/>]
        )
    }
}

SidebarItemsBlock.propTypes = {
    id: PropTypes.string,
    items: PropTypes.array
};
export default SidebarItemsBlock

