import React from 'react'
import {AUTH_STATE} from "../../actions/authActions";

class Registration extends React.Component {
    render() {
        const {registerLinkClickHandler} = this.props;

        return (
            <form className="authorization" action="">
                <div className="authorization__title">Регистрация</div>

                <input className="authorization__field" type="text" placeholder="Login"/>
                <input className="authorization__field" type="text" placeholder="Имя"/>
                <input className="authorization__field" type="text" placeholder="Пароль"/>
                <input className="authorization__field" type="text" placeholder="Повторите пароль"/>

                <button className="authorization__btn">Регистрация</button>
                <div className="authorization__link" onClick={() => {registerLinkClickHandler(AUTH_STATE.LOGIN)}}>Уже есть аккаунт</div>

            </form>
        )
    }
}

export default Registration
