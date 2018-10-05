import React from 'react'
import SidebarProfileItem from "./SidebarProfileItem";
import SidebarLinkItem from "./SidebarLinkItem";

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

export default SidebarItemList
