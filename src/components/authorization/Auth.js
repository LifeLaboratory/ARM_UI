import React from 'react'

class Auth extends React.Component {
    render() {
        const {session, authState} = this.props;

        return (
            <form className="authorization" action="">
                <div className="authorization__title">Авторизация</div>

                <input className="authorization__field" type="text" placeholder="Login"/>
                <input className="authorization__field" type="text" placeholder="Пароль"/>

                <button className="authorization__btn">Войти</button>
                <div className="authorization__link">регистрация</div>

            </form>
        )
    }
}

export default Auth
