import {CHAT_ACTIONS} from "../actions/chatActions";

const messages = null;

const hints = [];

const initialState = {
    messages,
    hints
};

export const chatReducer = function (state = initialState, action) {
    debugger

    switch (action.type) {
        case CHAT_ACTIONS.SET_HINTS:
            const {hints} = action;
            return {...state, hints};
        case CHAT_ACTIONS.OPEN_CHAT:
            const selectedId = action.chatId;
            const messages = action.messages;
            return {...state, selectedId, messages, hints};
        default:
            return {...state, hints};
    }
};

