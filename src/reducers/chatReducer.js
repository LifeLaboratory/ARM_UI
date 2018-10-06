const messages = [
    {
        id:0,
        chatId: 1,
        text: 'У меня проблема! Что мне делать?',
        sender: 'Client'
    },
    {
        id:1,
        chatId: 1,
        text: 'Не беспокойтесь, сейчас все решим!',
        sender: 'Operator'
    }
];

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
        default:
            return {...state};
    }
};

