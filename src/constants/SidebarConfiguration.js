export const SidebarConfiguration = {
    blocks: [
        {
            id: 'profileBlock',
            items: [
                {
                    type: 'profileItem',
                    profileImgSrc: 'http://www.master-hard.com/wp-content/uploads/2008/08/avatar-thumb.jpg',
                    name: "Иванов Иван"
                }
            ]
        },
        {
            id: 'menuBlock',
            items: [
                {type: 'linkItem', description: 'Чаты'},
                {type: 'linkItem', description: 'Статистика'}
            ]
        }
    ]
};