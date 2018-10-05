import React from 'react'
import SidebarItemsBlock from "./SidebarItemsBlock";
import PropTypes from 'prop-types';

class Sidebar extends React.Component {
    render() {
        const {blocks} = this.props;

        return (
            <div className="sidebar">
                {blocks.map((block) => {
                    return <SidebarItemsBlock key={block.id} id={block.id} items={block.items}/>
                })}
            </div>
        )
    }
}

Sidebar.propTypes = {
    blocks: PropTypes.array
};

export default Sidebar
