'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import logo from "@/assets/images/pilorub_logo2.png";
import {usePathname} from "next/navigation";
import styles from "@/src/components/NavBar/navbar.module.css";
import Image from "next/image";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCalculator,
    faMagnifyingGlass, faShop,
    faShoppingCart,
    faTree,
    faUser,
    faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
    isOpen: boolean;
    toggleMenu: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({isOpen, toggleMenu, ...props}) => {
    const currentPath = usePathname();
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    const links = [
        {icon: <FontAwesomeIcon icon={faAddressBook}/>, label: 'Контакты', href: '/contact'},
        {icon: <FontAwesomeIcon icon={faCalculator}/>, label: 'Калькулятор', href: '/calculator'},
        {icon: <FontAwesomeIcon icon={faShoppingCart}/>, label: 'Корзина', href: '/basket'},
        {icon: <FontAwesomeIcon icon={faUser}/>, label: 'Кабинет', href: '/profile'},
    ]

    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo_box}>
                <button onClick={() => toggleMenu(!isOpen)} className={styles.sidebar_toggle_btn}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <a href="/">
                    <Image src={logo} alt="Могазин Пиломатериалов" className={styles.logo}/>
                </a>
                <Link
                    className={`${styles.shopping_link} ${pathname === '/store' ? styles.active : ''}`}
                    href={"/store"}
                >
                    <FontAwesomeIcon icon={faShop}/>
                    <span>Магазин</span>
                </Link>
            </div>
            <div className={styles.navbar_content}>
                <div className={styles.search_box}>
                    <label className={styles.search_label} htmlFor="search_input">
                        <FontAwesomeIcon icon={faTree} className={styles.search_icon}/>
                        <input type="search" name="search_input" id="search_input" placeholder="Поиск" className={styles.search_input}/>
                    </label>
                    <button className={styles.search_btn}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
                <ul className={styles.navbar_items}>
                    {links.map((link, key) => {
                        return (
                            <li className={`${styles.navbar_item} ${pathname === link.href ? styles.active : ''}`} key={key}>
                                <Link className={styles.navbar_link} href={link.href}>
                                    {link.icon}
                                </Link>
                                <span>{link.label}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
