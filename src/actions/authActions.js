export const login = credentials => {
    return ({
        type: AUTH_ACTIONS.LOGIN,
        credentials
    })
};


export const AUTH_ACTIONS = {
    LOGIN: 'LOGIN',
};
