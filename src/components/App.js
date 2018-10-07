import React from 'react'

import SidebarContainer from '../containers/SidebarContainer'
import ContentContainer from "../containers/ContentContainer";
import Auth from "./authorization/Auth";


class App extends React.Component {

    componentDidMount() {
    }

    render() {
        console.log(this.props);
        const {session, authState, switchAuthState, setSession} = this.props;
        const toRender = [];

        if (!session) {
            /*
                        return <AuthContainer/>
            */
            return <Auth session={session} authState={authState} switchAuthState={switchAuthState} setSession={setSession}/>
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

