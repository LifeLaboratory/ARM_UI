import {connect} from 'react-redux'
import Auth from "../components/authorization/Auth";
import {setSession, switchAuthState} from "../actions/authActions";

const mapStateToProps = state => {
    const {authReducer} = state;
    const {auth} = authReducer;
    const {session, authState} = auth;
    return {session, authState}
};

const mapDispatchToProps = dispatch => ({
    switchAuthState: (desirableState) => dispatch(switchAuthState(desirableState)),
    setSession: (session) => dispatch(setSession(session))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Auth)
