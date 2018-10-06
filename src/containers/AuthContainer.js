import {connect} from 'react-redux'
import Chat from "../components/content/Chat";
import Auth from "../components/authorization/Auth";

const mapStateToProps = state => {
    const {authReducer} = state;
    const {auth} = authReducer;
    const {session, authState} = auth;

};

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)
