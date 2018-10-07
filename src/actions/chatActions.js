export const openChat = (chatId, messages) => {
    return ({
        type: CHAT_ACTIONS.OPEN_CHAT,
        chatId,
        messages
    })
};

export const setHints = (hints) => {
    return ({
        type: CHAT_ACTIONS.SET_HINTS,
        hints
    })
};

export const CHAT_ACTIONS = {
    OPEN_CHAT: 'OPEN_CHAT',
    SET_HINTS: 'SET_HINTS',
};

