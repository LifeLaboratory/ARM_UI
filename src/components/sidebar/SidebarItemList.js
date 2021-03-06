import React from 'react'
import SidebarProfileItem from "./SidebarProfileItem";
import SidebarLinkItem from "./SidebarLinkItem";
import Sidebar from "./Sidebar";
import PropTypes from 'prop-types';

class SidebarItemList extends React.Component {
    render() {
        const {items, onSwitchAfk} = this.props;
        const itemsToRender = items.valueSeq().map((item, index) => {
            switch (item.get('type')) {
                case "linkItem":
                    return <SidebarLinkItem key={index} description={item.get('description')}/>;
                case "profileItem":
                    return <SidebarProfileItem  onSwitchAfk={onSwitchAfk} key={index}  profileImgSrc={item.get('profileImgSrc')} name={item.get('name')} afk={item.get('afk')}/>;
            }
        });

        return (
            itemsToRender
        )
    }
}

/*
SidebarItemList.propTypes = {
    items: PropTypes.instanceOf(Iterable)
};
*/

export default SidebarItemList


