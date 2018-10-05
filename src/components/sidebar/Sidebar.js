import React from 'react'
import SidebarItemsBlock from "./SidebarItemsBlock";

class Sidebar extends React.Component {
    render() {
        const blocks = [
            {
                id: 'profileBlock',
                items: [
                    {
                        id:0,
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
        ];

        return (
            <div className="sidebar">
                {blocks.map((block) => {
                    return <SidebarItemsBlock key={block.id} id={block.id} items={block.items}/>
                })}
            </div>
        )
    }

}

export default Sidebar
