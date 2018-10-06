import React from 'react'

import SidebarContainer from '../containers/SidebarContainer'
import ContentContainer from "../containers/ContentContainer";
import AuthContainer from "../containers/AuthContainer";


class App extends React.Component {

    componentDidMount() {
    }

    render() {
        console.log(this.props);
        const {auth} = this.props;
        const toRender = [];

        if (!auth || !auth.session) {
            return <AuthContainer/>
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

