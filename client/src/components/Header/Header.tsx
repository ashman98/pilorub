'use client'

import React, { useState } from 'react';
import styles from '@/src/components/Header/header.module.css';
import Navbar from "../NavBar/Navbar";
import "@/app/global.css";
import MobileBanner from "../NavBar/mobile/MobileBanner";
import RightMenu from "../NavBar/mobile/RightMenu";

const Header: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = (open: boolean) => {
        setOpen(open);
    };

    return (
        <header className={styles.header}>
            <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
            <MobileBanner />
            <RightMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </header>
    );
};

export default Header;
