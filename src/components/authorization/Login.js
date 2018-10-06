import React from 'react'
import {AUTH_STATE} from "../../actions/authActions";

class Login extends React.Component {
    render() {
        const {registerLinkClickHandler} = this.props;
        return (
            <form className="authorization" action="">
                <div className="authorization__title">Авторизация</div>

                <input className="authorization__field" type="text" placeholder="Login"/>
                <input className="authorization__field" type="text" placeholder="Пароль"/>

                <button className="authorization__btn">Войти</button>
                <div className="authorization__link" onClick={()=> {registerLinkClickHandler(AUTH_STATE.REGISTER)}}>регистрация</div>

            </form>
        )
    }
}

export default Login
