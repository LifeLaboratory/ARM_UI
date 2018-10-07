import React from 'react'
import {AUTH_STATE} from "../../actions/authActions";


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

    handleSubmit(event, setSessionHandler) {
        event.preventDefault();

        const json = {Login: this.credentials.username, Password: this.credentials.password};

        const data = `data=${JSON.stringify(json)}`;

        const response = {
            "Answer": "Success",
            "Data": {"Session": "1bdce9c7-3d2c-0660-6933-189cbf5b337f"},
            "Type": "Operator"
        };

        setSessionHandler(response.Data.Session)

/*       fetch('http://90.189.132.25/api/v1/auth', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            body: data
        })
            .then(res => res.json)
            .then(value => console.log(value))
            .catch(e => console.error(e));*/
    }

    render() {
        const {registerLinkClickHandler,setSessionHandler} = this.props;

        return (
            <form className="authorization" onSubmit={e => this.handleSubmit(e,setSessionHandler)}>
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

            </form>
        )
    }
}

export default Login
