import React from 'react'
import Login from "./Login";
import Registration from "./Registration";
import {AUTH_STATE} from "../../actions/authActions";

class Auth extends React.Component {
    render() {
        const {auth, handlers} = this.props;
        const {session, authState} = auth;
        const {switchAuthState, setSession} = handlers;
        const toRender = [];

        if (authState === AUTH_STATE.LOGIN) {
            toRender.push(<Login key={authState} auth={auth} handlers={handlers}/>)
        } else if (authState === AUTH_STATE.REGISTER) {
            toRender.push(<Registration key={authState} auth={auth} handlers={handlers} />)
        }

        return (toRender)
    }
}

export default Auth
