import React from 'react'
import OperatorInfo from "./OperatorInfo";

class Sidebar extends React.Component {
    render() {
        return(
            <div className="sidebar">
              <OperatorInfo/>

                <div className="sidebar__items-list">
                    <a href="" className="sidebar__item">Чаты</a>
                    <a href="" className="sidebar__item">Статистика</a>
                </div>
            </div>
        )
    }

}

export default Sidebar
