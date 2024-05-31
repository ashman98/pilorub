'use client'

import React, {useEffect, useState} from 'react'
import Link from "next/link";
import { FaBug } from "react-icons/fa";
import logo from  "@/src/Assets/pilorub_logo2.png"
import {usePathname} from "next/navigation";
import classnames from "classnames";
import styles from "./navbar.module.css"
import Image from "next/image";

const NavBar = () =>{
    const currentPath = usePathname();
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
    // const [log, setLog] = useState(logo)

    const links = [
        {label: 'Главная', href: '/'},
        {label: 'Калькулятор', href: '/calculator'},
        {label: 'Контакты', href: '/contact'},
        {label: 'О компании', href: '/about'},
    ]

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const scrollHandler = () => {
                if (window.scrollY >= 20) {
                    updateNavbar(true);
                } else {
                    updateNavbar(false);
                }
            }

            window.addEventListener('scroll', scrollHandler);

            return () => {
                window.removeEventListener('scroll', scrollHandler);
            };
        }
    }, []);


    return (
        <nav
            className={classnames({
                [styles.navbar]: navColour,
                [styles.sticky]: !navColour,
            })}
        >
            <Link href="/client/public">
                <Image src={logo} alt="Могазин Пиломатериалов" className={styles.logo}/>
            </Link>
            <ul
                className={classnames({
                    [styles.navbarItems]: true,
                    'flex space-x-6': true,
                })}
            >
                {links.map((link, key) => {
                    return (
                        <li key={key}>
                            <Link
                                className={styles.navLink}
                                // className={classnames({
                                //     'text-zinc-900': link.href === currentPath,
                                //     'text-zinc-500': link.href !== currentPath,
                                //     'hover:text-zinc-800 transition-colors': true
                                // })}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavBar