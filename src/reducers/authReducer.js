import {AUTH_ACTIONS} from "../actions/authActions";

const initialState = {
    auth: {
        session: null,
        authState: 'login'
    }
};

export const authReducer = function (state = initialState, action) {
    switch (action.type) {
        case AUTH_ACTIONS.SWITCH_AUTH_STATE:
            const {desirableState} = action;
            const newState = {...state};
            newState.auth.authState = desirableState;
            return newState;
        case AUTH_ACTIONS.SET_SESSION:
            const {session} = action;
            const {auth} = state;
            auth.session = session;
            return {...state, auth:auth};
        default:
            return {...state};
    }
};

