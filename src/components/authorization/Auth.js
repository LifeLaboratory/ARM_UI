import React from 'react'
import Login from "./Login";
import Registration from "./Registration";
import {AUTH_STATE} from "../../actions/authActions";

class Auth extends React.Component {
    render() {
        const {session, authState} = this.props;
        const {switchAuthState, setSession} = this.props;
        const toRender = [];

        if (authState === AUTH_STATE.LOGIN) {
            toRender.push(<Login key={authState} setSessionHandler={setSession}
                                 registerLinkClickHandler={switchAuthState}/>)
        } else if (authState === AUTH_STATE.REGISTER) {
            toRender.push(<Registration key={authState} setSessionHandler={setSession}
                                        registerLinkClickHandler={switchAuthState}/>)
        }

        return (toRender)
    }
}

export default Auth
