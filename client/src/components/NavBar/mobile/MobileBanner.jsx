import React from 'react';
import styles from "../navbar.module.css"
import Image from "next/image";
import logo from "@/assets/images/pilorub_logo2.png"
import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeadset} from "@fortawesome/free-solid-svg-icons";


const MobileBanner = () => {
    return (
        <div className={styles.mobile_banner}>
            <Link href="/">
                <Image src={logo} alt="Могазин Пиломатериалов" className={styles.mobile_banner_logo}/>
            </Link>
            <div className={styles.banner_text}>
                <h1 className={styles.banner_title}>
                    <FontAwesomeIcon className={styles.title_icon} icon={faHeadset} />
                    <span className={styles.title_text}>+7(495) 369-42-45</span>
                </h1>
                <p className={styles.banner_subtitle}>Поддержка</p>
            </div>
        </div>
    );
};

export default MobileBanner;