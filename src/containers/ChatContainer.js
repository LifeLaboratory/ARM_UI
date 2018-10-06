import {connect} from 'react-redux'
import Sidebar from '../components/sidebar/Sidebar'
import {SidebarConfiguration} from "../constants/SidebarConfiguration";
import {fromJS} from 'immutable';
import ChatList from "../components/content/ChatList";

const mapStateToProps = state => {
    const {chatReducer} = state;

    return {}
};

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)
