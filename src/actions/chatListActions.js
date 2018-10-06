export const openChat = chatId => {
    return ({
        type: CHATLIST_ACTIONS.OPEN_CHAT,
        chatId
    })
};

export const selectOpened = () => {
    return ({
        type: CHATLIST_ACTIONS.SELECT_OPENED
    })
};

export const selectArchived = () => {
    return ({
        type: CHATLIST_ACTIONS.SELECT_ARCHIVED
    })
};

export const CHATLIST_ACTIONS = {
    OPEN_CHAT: 'OPEN_CHAT',
    SELECT_OPENED: 'SELECT_OPENED',
    SELECT_ARCHIVED: 'SELECT_ARCHIVED',
};

