import {CHATLIST_ACTIONS} from "../actions/chatListActions";

const activeChats = [
    {
        id: 1,
        name: 'Иван Петров',
        date: '06.10.2018',
        text: 'Я не устанавливал этот тариф'
    },
    {
        id: 2,
        name: 'Петров Сергей',
        date: '06.10.2018',
        text: 'Не беспокойтесь, сейчас все решим!',
    },
    {
        id: 3,
        name: 'Сидоров Пётр',
        date: '06.10.2018',
        text: 'С меня списывается слишком много денег'
    }
];

const archiveChats = [
    {
        id: 4,
        name: 'Иван Василичъ',
        date: '06.10.2018',
        text: 'ПАМАГИТЕ! Не работает!!'
    },
    {
        id: 5,
        name: 'Василий Иваныч',
        date: '06.10.2018',
        text: 'алло! Ответь!'
    },
    {
        id: 6,
        name: 'Инокентий',
        date: '06.10.2018',
        text: 'ВСЕ СЛОМАЛОСЬ! СРОЧНО!'
    }
];


const initialState = {
    selectedId: null,
    openedCategory: 'activeChats',
    activeChats: activeChats,
    archivedChats: archiveChats
};

export const chatListReducer = function (state = initialState, action) {
    let openedCategory = 'activeChats';
    switch (action.type) {
        case CHATLIST_ACTIONS.SELECT_OPENED:
            openedCategory = 'activeChats';
            return {...state, openedCategory};
        case CHATLIST_ACTIONS.SELECT_ARCHIVED:
            openedCategory = 'archivedChats';
            return {...state, openedCategory};
        case CHATLIST_ACTIONS.SET_ACTIVE_CHATS:
            return {...state, activeChats: action.chats};
        case CHATLIST_ACTIONS.SET_ARCHIVED_CHATS:
            return {...state, archivedChats: action.chats};
        default:
            return {...state, openedCategory};
    }
};

