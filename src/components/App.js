import React from 'react'

import SidebarContainer from '../containers/SidebarContainer'
import ContentContainer from "../containers/ContentContainer";
import Auth from "./authorization/Auth";


class App extends React.Component {

    componentDidMount() {
    }

    render() {
        const {auth, errorMsg, switchAuthState, setSession, pushAuthError} = this.props;
        auth.errorMsg = errorMsg;

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

