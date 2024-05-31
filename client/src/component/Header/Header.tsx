'use client'

import React from 'react'
import styles from './header.module.css'
import Link from "next/link";
import { FaBug } from "react-icons/fa";
import {usePathname} from "next/navigation";
import classnames from "classnames";
import Banner from "@/src/component/Banner/Banner";

const Header = function({children} : {
    children: React.ReactNode
}) {
    return (
        <header className={styles.header}>
            {children}
        </header>
    )
}

export default Header