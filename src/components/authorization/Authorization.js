import React from 'react'
import AuthorizationLogin from "./AuthorisationLogin";
import AuthorizationRegistration from "./AuthorisationRegistration";

class Authorization extends React.Component {
    render() {

        if (this.props.type === 'login') {
            <AuthorizationLogin/>
        } else {
            <AuthorizationRegistration/>
        }


        return (
        )
    }
}

export default Authorization
