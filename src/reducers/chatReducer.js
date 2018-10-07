const messages = [
    {
        id: 0,
        chatId: 2,
        text: 'У меня проблема! Что мне делать?',
        sender: 'Client'
    },
    {
        id: 1,
        chatId: 2,
        text: 'Не беспокойтесь, сейчас все решим!',
        sender: 'Operator'
    },
    {
        id: 3,
        chatId: 1,
        text: 'Я не устанавливал этот тариф!',
        sender: 'Client'
    },
    {
        id: 4,
        chatId: 3,
        text: 'С меня списывается слишком много денег!',
        sender: 'Client'
    },
    {
        id: 5,
        chatId: 3,
        text: 'Уточните, пожалуйста, ваш ФИО и номер телефона?',
        sender: 'Operator'
    },
    {
        id: 6,
        chatId: 1,
        text: 'Подождите, пожалуйста. Вам ответит ближайший освободившийся оператор.',
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

