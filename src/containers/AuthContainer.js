import {connect} from 'react-redux'
import Chat from "../components/content/Chat";
import Auth from "../components/authorization/Auth";
import {switchAuthState} from "../actions/authActions";
import {selectOpened} from "../actions/chatListActions";

const mapStateToProps = state => {
    const {authReducer} = state;
    const {auth} = authReducer;
    const {session, authState} = auth;
    return {session, authState}
};

const mapDispatchToProps = dispatch => ({
    switchAuthState: (desirableState) => dispatch(switchAuthState(desirableState))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Auth)
