import React from 'react'

import SidebarContainer from '../containers/SidebarContainer'
import ContentContainer from "../containers/ContentContainer";
import Auth from "./authorization/Auth";


class App extends React.Component {

    render() {
        const {authState, session, errorMsg, switchAuthState, setSession, pushAuthError} = this.props;
        const auth = {authState,session, errorMsg};
        const handlers = {
            switchAuthState,
            setSession,
            pushAuthError
        };

        if (!auth.session) {
            return <Auth auth={auth} handlers={handlers}/>
        }

        return (
            <div>
                <SidebarContainer/>
                <ContentContainer/>
            </div>
        )
    }
}

export default App

