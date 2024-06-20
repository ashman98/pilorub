'use client'

import React, {useState} from 'react';
import styles from "./product_list.module.css";
import {Card} from "flowbite-react";
import Link from "next/link";
import RatingUI from "../Rating/RatingUI";

interface Product {
    id: string,
    category: string;
    product_type: string;
    thickness: string;
    width: string;
    length: string;
    standard?: string;
    ratings: number[];
    price: string;
    img: string;
}

interface ProductListProps {
    products: Product[];
}


const ProductList: React.FC<ProductListProps> = ({products}) => {
    return (
        <div className={`flex flex-wrap ${styles.product_list}`}>
            {products.map((product, index) => (
                <Card
                    key={index + 1}
                    className={styles.list_item}
                    imgSrc={product.img}
                >
                    <Link href={`/product/${product.id}`}>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {product.category} {product.product_type}
                        </h5>
                        <p className="font-normal text-sm tracking-normal text-gray-700 dark:text-white">
                            {product.thickness}x{product.width}x{product.length}
                            {product.standard ? `, ${product.standard}` : ''}
                        </p>
                    </Link>
                    <div className="mb-1 flex items-center">
                        <RatingUI width={"25"} height={"25"} ratings={product.ratings}/>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{product.price}</span>
                        <a
                            href="#"
                            className="rounded-lg
                                bg-zinc-600 px-3 py-1.5
                                text-center text-sm font-medium
                                text-white hover:bg-zinc-800
                                focus:outline-none focus:ring-4
                                focus:ring-zinc-300
                                dark:bg-zinc-600 dark:hover:bg-zinc-700
                                 dark:focus:ring-zinc-800"
                        >
                            В корзину
                        </a>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default ProductList;
