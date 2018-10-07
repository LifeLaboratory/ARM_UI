export const openChat = (chatId, messages) => {
    return ({
        type: CHAT_ACTIONS.OPEN_CHAT,
        chatId,
        messages
    })
};

export const CHAT_ACTIONS = {
    OPEN_CHAT: 'OPEN_CHAT',
};

