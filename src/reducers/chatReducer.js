import {CHAT_ACTIONS} from "../actions/chatActions";

const messages = null;

const hints = [
    'Вы пробовали выключить и снова включить?',
    'Как давно наблюдается проблема?',
    'Может просто так оставим?'
];

const initialState = {
    messages,
    hints
};

export const chatReducer = function (state = initialState, action) {
    switch (action.type) {
        case CHAT_ACTIONS.OPEN_CHAT:
            const selectedId = action.chatId;
            const messages = action.messages;
            return {...state, selectedId, messages, hints};
        default:
            return {...state, hints};
    }
};

