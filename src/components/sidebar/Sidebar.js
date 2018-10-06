import React from 'react'
import SidebarItemsBlock from "./SidebarItemsBlock";
import PropTypes from 'prop-types';
import {Iterable} from 'immutable';

class Sidebar extends React.Component {
    render() {
        const {blocks} = this.props;
        return (
            <div className="sidebar">
                {blocks.valueSeq().map((block) => {
                    return <SidebarItemsBlock key={block.get('id')} id={block.get('id')} items={block.get('items')}/>
                })}
            </div>
        )
    }
}

/*
Sidebar.propTypes = {
    blocks: PropTypes.instanceOf(Iterable)
};
*/

export default Sidebar
