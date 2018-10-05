import React from 'react'
import PropTypes from 'prop-types';

class SidebarItemList extends React.Component {
    render() {
        const {description} = this.props;

        return (
            <a href="" className="sidebar__item">{description}</a>
        )
    }
}

SidebarItemList.propTypes = {
    description: PropTypes.string
};

export default SidebarItemList
