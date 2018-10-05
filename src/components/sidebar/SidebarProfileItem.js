import React from 'react'
import PropTypes from 'prop-types';

class SidebarProfileItem extends React.Component {
    render() {
        const {profileImgSrc, name} = this.props;

        console.log(this.props)

        return (
            <div className="operator-info">
                <div className="operator-info__avatar-wrapper">
                    <img src={profileImgSrc} alt="" className="operator-info__avatar-img"/>
                </div>

                <div className="operator-info__name">{name}</div>
            </div>
        )
    }
}

SidebarProfileItem.propTypes = {
    profileImgSrc: PropTypes.string,
    name: PropTypes.string
};

export default SidebarProfileItem
