import {AUTH_ACTIONS} from "../actions/authActions";

const initialState = {
    auth: {
        session: null,
        authState: 'login',
        errorMsg: null
    }
};

export const authReducer = function (state = initialState, action) {

    const handleAuthError = (state, action) => {
        const {errorMsg} = action;
        const {auth} = state;
        auth.errorMsg = errorMsg;
        return {...state, auth};
    };

    const handleSetSession = (state, action) => {
        const {session} = action;
        const {auth} = state;
        auth.session = session;
        auth.errorMsg = null;
        return {...state, auth};
    };

    const handleSwitchAuthState = (state, action) => {
        const {desirableState} = action;
        const auth = {state};
        auth.authState = desirableState;
        return {...state, auth};
    };
    switch (action.type) {
        case AUTH_ACTIONS.SWITCH_AUTH_STATE:
            return handleSwitchAuthState(state, action);
        case AUTH_ACTIONS.SET_SESSION:
            return handleSetSession(state, action);
        case AUTH_ACTIONS.AUTH_ERROR:
            return handleAuthError(state, action);
        default:
            return {...state};
    }

};

