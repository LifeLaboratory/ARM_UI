import React from 'react'

import SidebarContainer from '../containers/SidebarContainer'
import ContentContainer from "./ContentContainer";


class App extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <SidebarContainer/>
                <ContentContainer/>
            </div>
        )
    }
}

export default App
