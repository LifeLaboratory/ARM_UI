import React from 'react'

class AuthorizationLogin extends React.Component {
    render() {
        return (
            <form className="authorization" action="">
                <div className="authorization__title">Авторизация</div>

                <input className="authorization__field" type="text" placeholder="Login"/>
                <input className="authorization__field" type="text" placeholder="Пароль"/>

                <button className="authorization__btn">Войти</button>
            </form>
        )
    }
}

export default AuthorizationLogin
