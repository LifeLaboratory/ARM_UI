import React from 'react'
import SidebarItemList from "./SidebarItemList";
import PropTypes from 'prop-types';

class SidebarItemsBlock extends React.Component {

    render() {
        const {items} = this.props;

        return (
            <SidebarItemList items={items}/>
        )
    }
}

SidebarItemsBlock.propTypes = {
    id: PropTypes.string,
    items: PropTypes.array
};
export default SidebarItemsBlock

