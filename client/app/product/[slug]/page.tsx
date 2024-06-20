import React from 'react';
import ProductComponent from "../_components/Product/ProductComponent";
import wood1 from "@/assets/images/products/wood1.jpg";
import wood2 from "@/assets/images/products/wood2.jpg";
import wood3 from "@/assets/images/products/wood3.jpg";
import wood4 from "@/assets/images/products/wood4.jpg";
import {Metadata} from "next";

interface Product {
    id: string;
    category: string;
    product_type: string;
    thickness: string;
    width: string;
    length: string;
    standard: string;
    ratings: number[];
    price: string;
    img: string;
}

interface ProductPageProps {
    params: {
        slug: string;
    };
}


export const metadata: Metadata = {
    title: 'Подробнее',
}

const ProductPage: React.FC<ProductPageProps> = ({params}) => {
    const products: Array<Product> = [
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
    const product = products.filter((item) => item.id === params.slug)[0];

    return (
        <div>
            <ProductComponent product={product}/>
        </div>
    );
};

export default ProductPage;
