import React from 'react'
import SidebarProfileItem from "./SidebarProfileItem";
import SidebarLinkItem from "./SidebarLinkItem";
import Sidebar from "./Sidebar";
import PropTypes from 'prop-types';

class SidebarItemList extends React.Component {
    render() {

        const {items} = this.props;
        const itemsToRender = items.map((item, index) => {
            switch (item.type) {
                case "linkItem":
                    return <SidebarLinkItem key={index} description={item.description}/>;
                case "profileItem":
                    return <SidebarProfileItem  key={index}  profileImgSrc={item.profileImgSrc} name={item.name}/>;
            }
        });

        return (
            itemsToRender
        )
    }
}

SidebarItemList.propTypes = {
    items: PropTypes.array
};

export default SidebarItemList


