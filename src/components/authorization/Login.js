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
        const {setSession, pushAuthError} = handlers;

        ARMApi
            .login(this.credentials.username, this.credentials.password)
            .then(result => {
                return setSession(result.Data.Session)
            })
            .catch(e => {
                return pushAuthError("error")
            })
    }

    render() {
        const {handlers, auth} = this.props;
        const {registerLinkClickHandler} = handlers
        const {errorMsg} = auth;
        const toRender = [];
        let inputClassList = "authorization__field";

        if (errorMsg) {
            inputClassList += " warning";
        }
        return (<form className="authorization" onSubmit={e => this.handleSubmit(e, handlers)}>
            <div className="authorization__title">Авторизация</div>

            <input className={inputClassList} type="text" placeholder="Login" onChange={(e) => {
                this.handleLoginChange(e)
            }}/>
            <input className={inputClassList} type="text" placeholder="Пароль" onChange={(e) => {
                this.handlePasswordChange(e)
            }}/>

            <button className="authorization__btn">Войти</button>
            <div className="authorization__link" onClick={() => {
                registerLinkClickHandler(AUTH_STATE.REGISTER)
            }}>регистрация
            </div>
        </form>);

    }

}

export default Login
