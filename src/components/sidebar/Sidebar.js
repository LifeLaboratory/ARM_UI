import React from 'react'
import OperatorInfo from "./OperatorInfo";
import SidebarItemList from "./SidebarItemList";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <OperatorInfo/>
                <SidebarItemList/>
            </div>
        )
    }

}

export default Sidebar
