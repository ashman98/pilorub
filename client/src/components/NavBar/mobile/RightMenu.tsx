'use client';

import React from 'react';
import {Drawer, Sidebar} from 'flowbite-react';
import {
    HiChartPie,
    HiShoppingBag,
    HiUsers,
    HiLogin,
    HiPencil,
    HiClipboard,
    HiCollection,
    HiInformationCircle, HiOutlineShoppingCart
} from 'react-icons/hi';

interface RightMenuProps {
    isOpen: boolean;
    toggleMenu: (open: boolean) => void;
}

const RightMenu: React.FC<RightMenuProps> = ({isOpen, toggleMenu}) => {
    const handleOpen = () => toggleMenu(true);
    const handleClose = () => toggleMenu(false);

    return (
        <>
            <Drawer open={isOpen} onClose={handleClose}>
                <Drawer.Header title="Меню" titleIcon={() => <></>}/>
                <Drawer.Items>
                    <Sidebar aria-label="Sidebar with multi-level dropdown example"
                             className="[&>div]:bg-transparent [&>div]:p-0">
                        <div className="flex h-full flex-col justify-between py-2">
                            <div>
                                <Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="/" icon={HiShoppingBag}>
                                            Магазин
                                        </Sidebar.Item>
                                        <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                                            Вход
                                        </Sidebar.Item>
                                        <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                                            Регистрация
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="https://github.com/themesberg/flowbite-react/"
                                                      icon={HiClipboard}>
                                            Docs
                                        </Sidebar.Item>
                                        <Sidebar.Item href="https://flowbite-react.com/" icon={HiCollection}>
                                            Components
                                        </Sidebar.Item>
                                        <Sidebar.Item href="https://github.com/themesberg/flowbite-react/issues"
                                                      icon={HiInformationCircle}>
                                            Help
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                </Sidebar.Items>
                            </div>
                        </div>
                    </Sidebar>
                </Drawer.Items>
            </Drawer>
        </>
    );
};

export default RightMenu;
