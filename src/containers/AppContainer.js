import {connect} from 'react-redux'
import App from "../components/App";
import {pushAuthError, setSession, switchAuthState} from "../actions/authActions";

const mapStateToProps = state => {
    const {authReducer} = state;
    const {auth} = authReducer;
    const {errorMsg} = auth;
    return {auth, errorMsg}
};

const mapDispatchToProps = dispatch => ({
    switchAuthState: (desirableState) => dispatch(switchAuthState(desirableState)),
    setSession: (session) => dispatch(setSession(session)),
    pushAuthError: (errorMsg) => dispatch(pushAuthError(errorMsg))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
