import React from 'react'

class OperatorInfo extends React.Component {
    render() {
        return (
            <div className="operator-info sidebar__operator-info">
                <div className="operator-info__avatar-wrapper">
                    <img src="http://www.master-hard.com/wp-content/uploads/2008/08/avatar-thumb.jpg" alt=""
                         className="operator-info__avatar-img"/>
                </div>

                <div className="operator-info__name">Иван Василичъ</div>

                <div className="operator-info__link">Профиль</div>

                <div className="operator-info__status active">
                    В работе
                </div>

                <div className="operator-info__link">Выход</div>
            </div>
        )
    }

}

export default OperatorInfo
