export const login = credentials => {
    return ({
        type: AUTH_ACTIONS.LOGIN,
        credentials
    })
};

export const switchAuthState = desirableState => {
    return ({
        type: AUTH_ACTIONS.SWITCH_AUTH_STATE,
        desirableState
    })
};


export const AUTH_ACTIONS = {
    LOGIN: 'LOGIN',
    SWITCH_AUTH_STATE: 'SWITCH_AUTH_STATE',
};

export const AUTH_STATE = {
    LOGIN: 'login',
    REGISTER: 'register'
}
