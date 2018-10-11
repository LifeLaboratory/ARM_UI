export const openChat = (chatId, messages) => {
    return ({
        type: CHATLIST_ACTIONS.OPEN_CHAT,
        chatId,
        messages
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

export const setActiveChats = (chats) => {
    return ({
        type: CHATLIST_ACTIONS.SET_ACTIVE_CHATS,
        chats
    })
};


export const setArchivedChats = (chats) => {
    return ({
        type: CHATLIST_ACTIONS.SET_ARCHIVED_CHATS,
        chats
    })
};

export const CHATLIST_ACTIONS = {
    OPEN_CHAT: 'OPEN_CHAT',
    SET_ACTIVE_CHATS: 'SET_ACTIVE_CHATS',
    SET_ARCHIVED_CHATS: 'SET_ARCHIVED_CHATS',
    SELECT_ARCHIVED: 'SELECT_ARCHIVED',
    SELECT_OPENED: 'SELECT_OPENED',
};

