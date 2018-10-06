import {connect} from 'react-redux'
import App from "../components/App";

const mapStateToProps = state => {
    const {authReducer} = state;
    const {auth} = authReducer;
    return {auth}
};

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
