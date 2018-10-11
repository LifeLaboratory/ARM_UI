import React from 'react'
import PropTypes from 'prop-types';

class SidebarLinkItem extends React.Component {
    render() {
        const {description} = this.props;
        return (
            <a href="" className="sidebar__item">{description}</a>
        )
    }
}
/*

SidebarLinkItem.propTypes = {
    description: PropTypes.string
};
*/

export default SidebarLinkItem
