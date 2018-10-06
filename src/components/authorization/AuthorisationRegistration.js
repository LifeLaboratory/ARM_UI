import React from 'react'

class AuthorizationRegistration extends React.Component {
    render() {
        return (
            <form className="authorization" action="">
                <div className="authorization__title">Регистрация</div>

                <input className="authorization__field" type="text" placeholder="Login"/>
                <input className="authorization__field" type="text" placeholder="Имя"/>
                <input className="authorization__field" type="text" placeholder="Пароль"/>
                <input className="authorization__field" type="text" placeholder="Повторите пароль"/>

                <button className="authorization__btn">Регистрация</button>
            </form>
        )
    }
}

export default AuthorizationRegistration
