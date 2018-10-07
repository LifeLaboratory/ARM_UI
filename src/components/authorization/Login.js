import React from 'react'
import {AUTH_STATE} from "../../actions/authActions";
import ARMApi from "../../utils/arm.api";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.credentials = {
            username: null,
            password: null
        };

    }

    handleLoginChange(event) {
        this.credentials.username = event.target.value;
    }

    handlePasswordChange(event) {
        this.credentials.password = event.target.value;
    }

    handleSubmit(event, handlers) {
        event.preventDefault();
        const {setSessionHandler, pushAuthError} = handlers;

        ARMApi
            .login(this.credentials.username, this.credentials.password)
            .then(result => setSessionHandler(result.Data.Session))
            .catch(e => pushAuthError("asdasd"))
    }

    render() {
        const {handlers, auth} = this.props;
        const {registerLinkClickHandler} = handlers
        const {errorMsg} = auth;
        const toRender = [<form className="authorization" onSubmit={e => this.handleSubmit(e, handlers)}>
            <div className="authorization__title">Авторизация</div>

            <input className="authorization__field" type="text" placeholder="Login" onChange={(e) => {
                this.handleLoginChange(e)
            }}/>
            <input className="authorization__field" type="text" placeholder="Пароль" onChange={(e) => {
                this.handlePasswordChange(e)
            }}/>

            <button className="authorization__btn">Войти</button>
            <div className="authorization__link" onClick={() => {
                registerLinkClickHandler(AUTH_STATE.REGISTER)
            }}>регистрация
            </div>
        </form>];

        if (errorMsg) {
            toRender.push(<div>There was error while trying to login</div>)
        }
        return(toRender);

    }

}

export default Login
