'use client'

import React from 'react';

const SubMenu = () => {

    const menuItems = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Saved' },
        { id: 3, name: 'Electronics' },
        { id: 4, name: 'Motors' },
        { id: 5, name: 'Fashion' },
        { id: 6, name: 'Collectables and Art' },
        { id: 7, name: 'Sports' },
        { id: 8, name: 'Health & Beauty' },
        { id: 9, name: 'Industrial Equipment' },
        { id: 10, name: 'Home & Garden' },
        { id: 11, name: 'Sell' },
    ];

    return (
        <section className="border-b" id="SubMenu">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                <ul className="flex items-center text-[13px] text-neutral-900 px-2 h-8" id="TopMenuLeft">
                    {menuItems.map((item) =>
                        <li key={item.id} className="px-3 hover:underline cursor-pointer">{item.name}</li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default SubMenu;