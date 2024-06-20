import React, {Suspense} from 'react';
import Filter from "./_components/Filter/Filter";
import styles from "./store.module.css";
import wood1 from "@/assets/images/products/wood1.jpg"
import wood2 from "@/assets/images/products/wood2.jpg"
import wood3 from "@/assets/images/products/wood3.jpg"
import wood4 from "@/assets/images/products/wood4.jpg"
import {FooterDivider} from "flowbite-react";
import type {Metadata} from "next";
import ProductList from "./_components/ProductList/ProductList";

export const metadata: Metadata = {
    title: 'Магазин',
}


export default function StorePage() {

    const products = [
        {
            id: '1',
            category: 'Доска',
            product_type: 'обрезная',
            thickness: '25',
            width: '100',
            length: '6000',
            standard: 'ГОСТ',
            ratings: [5, 5, 5, 5, 3],
            price: '18 200 RUB',
            img: wood1.src
        },
        {
            id: '2',
            category: 'Доска',
            product_type: 'обрезная',
            thickness: '25',
            width: '100',
            length: '6000',
            standard: 'ГОСТ',
            ratings: [2, 2, 2, 2, 2],
            price: '17 000 RUB',
            img: wood2.src
        },
        {
            id: '3',
            category: 'Доска',
            product_type: 'обрезная',
            thickness: '25',
            width: '100',
            length: '6000',
            standard: 'из осины',
            ratings: [2, 3, 3, 1],
            price: '9 500 RUB',
            img: wood3.src
        },
        {
            id: '4',
            category: 'Доска',
            product_type: 'обрезная',
            thickness: '25',
            width: '100',
            length: '6000',
            standard: 'ОСТ',
            ratings: [1, 1, 1, 1, 1, 5],
            price: '5 500 RUB',
            img: wood4.src
        }
    ];
    return (
        <div className={styles.store_wrapper}>
            <Filter/>
            <div className={styles.store_content}>
                <h1 className={styles.page_title}>Популяпные товары</h1>
                <FooterDivider/>
                <ProductList products={products}/>
            </div>
        </div>
    );
};