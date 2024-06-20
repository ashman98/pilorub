'use client'

import React, {useEffect, useState} from 'react';
import {Breadcrumb, Card, Button, FooterDivider} from 'flowbite-react';
import {HiHome} from 'react-icons/hi';
import styles from "../../product.module.css";
import getFilteredFields from '@/src/lib/Product/GetProductFieldsWithFilter';
import RatingComponent from "@/app/store/_components/Rating/RatingComponent";
import {Metadata} from "next";
import FeedbackComponent from "@/app/product/_components/FeedbackComponent/FeedbackComponent"; // Adjust path as per your project structure

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

interface ProductComponentProps {
    product: Product;
}

const ProductComponent: React.FC<ProductComponentProps> = ({product}) => {
    const [featureFields, setFeatureFields] = useState<Record<string, any>>({}); // Adjust state type to match the expected output of getFilteredFields

    useEffect(() => {
        const filteredFields = getFilteredFields(product); // Fetch filtered fields using getFilteredFields function
        setFeatureFields(filteredFields);
    }, [product]);


    return (
        <div className={`wrapper ${styles.product_wrapper}`}>
            <Breadcrumb aria-label="Solid background breadcrumb example"
                        className="bg-transparent sticky px-5 py-3 dark:bg-gray-800">
                <Breadcrumb.Item href="/" icon={HiHome}>
                    Главная
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/store">Магазин</Breadcrumb.Item>
                <Breadcrumb.Item>Детали пиломатериала</Breadcrumb.Item>
            </Breadcrumb>

            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <Card imgAlt="Product Image" imgSrc={product.img}>
                                <div className="flex -mx-2 mb-4">
                                    <Button fullSized color="dark">
                                        Добавить в корзину
                                    </Button>
                                </div>
                            </Card>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                {product.category} {product.product_type}
                                <span className="text-2xl font-bold text-gray-600 dark:text-white mb-2 mx-3">
                                    {product.thickness}x{product.width}x{product.length}
                                </span>
                            </h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Цена:</span>
                                    <span className="text-gray-600 dark:text-gray-300 mx-2">{product.price}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Стандарт:</span>
                                    <span className="text-gray-600 dark:text-gray-300 mx-2">{product.standard}</span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Описание:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer
                                    euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus
                                    aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut
                                    erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
                                    lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                                    tincidunt mi consectetur.
                                </p>
                            </div>
                            <div>
                                {Object.keys(featureFields).length > 0 && (
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Характеристики товара:</span>
                                        <FooterDivider style={{margin: "10px 0"}}/>
                                        {Object.entries(featureFields).map(([key, value], index) => (
                                            <div key={index}
                                                 className={`flex justify-between p-2 ${styles.field_item}`}>
                                                <span className="font-bold text-gray-500">{key}: </span>
                                                <span className="font-bold text-gray-600">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <FeedbackComponent />
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;
