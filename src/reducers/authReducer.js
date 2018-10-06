import {AUTH_ACTIONS} from "../actions/authActions";

const initialState = {
    auth: {
        session: null,
        authState: 'login'
    }
};

export const authReducer = function (state = initialState, action) {
    switch (action.type) {
        case AUTH_ACTIONS.LOGIN:
            return {...state};
            break;
        default:
            return {...state};
    }
};

