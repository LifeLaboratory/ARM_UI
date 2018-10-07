export const setSession = session => {
    return ({
        type: AUTH_ACTIONS.SET_SESSION,
        session
    })
};

export const switchAuthState = desirableState => {
    return ({
        type: AUTH_ACTIONS.SWITCH_AUTH_STATE,
        desirableState
    })
};

export const AUTH_ACTIONS = {
    SET_SESSION: 'SET_SESSION',
    SWITCH_AUTH_STATE: 'SWITCH_AUTH_STATE',
};

export const AUTH_STATE = {
    LOGIN: 'login',
    REGISTER: 'register'
}
