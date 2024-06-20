import React from "react";
import SliderComponent from "../../src/components/Slider/SliderComponent";
import styles from "./home.module.css";
import slider1 from "/public/images/slider/slider1.jpg";
import slider2 from "/public/images/slider/slider2.jpg";
import slider3 from "/public/images/slider/slider3.jpg";
import type { StaticImageData } from 'next/image';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Главная',
}



const HomePage: React.FC = () => {
    const images: StaticImageData[] = [slider1, slider2, slider3];

    return (
        <div className={styles.home_page}>
            <SliderComponent images={images} />
        </div>
    );
}

export default HomePage;