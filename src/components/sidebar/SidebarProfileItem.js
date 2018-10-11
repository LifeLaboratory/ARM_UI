import React from 'react'

class SidebarProfileItem extends React.Component {
    render() {
        const {profileImgSrc, name, afk, onSwitchAfk} = this.props;
        let statusClassList = "operator-info__status active";

        if (afk) {
            statusClassList += ' afk'
        }

        return (
            <div className="operator-info">
                <div className="operator-info__avatar-wrapper">
                    <img src={profileImgSrc} alt="" className="operator-info__avatar-img"/>
                </div>

                <div className="operator-info__name">{name}</div>

                <div className="operator-info__link">Профиль</div>

                <div className={statusClassList} onClick={() => {onSwitchAfk()}}>
                    {afk ? 'Отошёл' : 'В работе'}
                </div>

                <div className="operator-info__link">Выход</div>

            </div>
        )
    }
}

/*

SidebarProfileItem.propTypes = {
    profileImgSrc: PropTypes.string,
    name: PropTypes.string
};
*/

export default SidebarProfileItem
