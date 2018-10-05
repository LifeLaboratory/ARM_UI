import React from 'react'
import SidebarItemsBlock from "./SidebarItemsBlock";

class Sidebar extends React.Component {
    render() {
        const blocks = [
            {
                id: 'profileBlock',
                items: [
                    {
                        type: 'profileItem',
                        profileImgSrc: 'http://www.master-hard.com/wp-content/uploads/2008/08/avatar-thumb.jpg',
                        name: "Иванов Иван"
                    },
                    {type: 'linkItem', description: 'Профиль'},
                    {type: 'linkItem', description: 'В работе'},
                    {type: 'linkItem', description: 'Выход'}
                ]
            },
            {
                id: 'menuBlock',
                items: [
                    {type: 'linkItem', description: 'Чаты'},
                    {type: 'linkItem', description: 'Статистика'}
                ]
            }
        ];

        return (
            <div className="sidebar">
                {blocks.map(block => {
                    return (
                        [<SidebarItemsBlock id={block.id} items={block.items}/>, <hr/>]
                    )
                })}
            </div>
        )
    }

}

export default Sidebar
