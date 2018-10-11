export const setSession = session => {
    return ({
        type: AUTH_ACTIONS.SET_SESSION,
        session
    })
};
export const register = credentials => {
    return ({
        type: AUTH_ACTIONS.REGISTER,
        credentials
    })
};

export const switchAuthState = desirableState => {
    return ({
        type: AUTH_ACTIONS.SWITCH_AUTH_STATE,
        desirableState
    })
};
export const pushAuthError = errorMsg => {
    return ({
        type: AUTH_ACTIONS.AUTH_ERROR,
        errorMsg
    })
};

export const AUTH_ACTIONS = {
    SET_SESSION: 'SET_SESSION',
    SWITCH_AUTH_STATE: 'SWITCH_AUTH_STATE',
    REGISTER: 'REGISTER',
    AUTH_ERROR: 'AUTH_ERROR'
};

export const AUTH_STATE = {
    LOGIN: 'login',
    REGISTER: 'register',
}
