'use client';
import React, {useEffect, useRef, useState} from 'react';
import {FooterDivider} from "flowbite-react";
import wood1 from "@/assets/images/products/wood1.jpg";
import wood2 from "@/assets/images/products/wood2.jpg";
import Image, {StaticImageData} from "next/image";
import styles from "./basket.module.css";
import ToastUIComponent from "@/components/UI/ToastUI/ToastUIComponent";
import {update} from "immutable";

interface Product {
    id: number;
    category: string;
    product_type: string;
    thickness: string;
    width: string;
    length: string;
    price: string;
    img: StaticImageData;
    delivery: string;
    count: number;
}

const BasketPage: React.FC = () => {
    const seconds = 5;
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [basketProducts, setBasketProducts] = useState<Product[]>([
        {
            id: 5,
            category: 'Доска',
            product_type: 'обрезная',
            thickness: '25',
            width: '100',
            length: '6000',
            price: '18200',
            img: wood1,
            delivery: '1800',
            count: 1
        },
        {
            id: 9,
            category: 'Доска',
            product_type: 'обрезная',
            thickness: '25',
            width: '100',
            length: '6000',
            price: '17000',
            img: wood2,
            delivery: '1800',
            count: 2,
        },
    ]);

    const [allPrices, setAllPrices] = useState<number>(0);
    const [allDelivery, setAllDelivery] = useState<number>(0);
    const [toastOpened, setToastOpened] = useState<boolean>(false);

    useEffect(() => {
        let pricesSum = 0;
        basketProducts.forEach(product => {
            pricesSum += Number(product.price) * product.count;
        });
        setAllPrices(pricesSum);

        let deliverySum = 0;
        basketProducts.forEach(product => {
            deliverySum += Number(product.delivery);
        });
        setAllDelivery(deliverySum);
    }, [basketProducts]);

    const calculateProductTotalPrice = (count: number, price: number, delivery: number): string => {
        return (count * (price + delivery)) + " RUB";
    }

    const handlePlusCount = (id: number, count: number) => {
        const updatedProducts = basketProducts.map(product =>
            product.id === id ? {...product, count: count} : product
        );
        setBasketProducts(updatedProducts);
    }

    const handleMinusCount = (id: number, count: number) => {
        if (count < 0) {
            count = 0;
        }
        setBasketProducts(updateProducts(id, count));
        if (count === 0) {
            setToastOpened(true);
        }
    }

    const updateProducts = (productId: number, count: number) => {
        return basketProducts.map(product =>
            product.id === productId ? {...product, count: count} : product
        );
    }


    const handleCountChange = (productId: number, newCount: number) => {
        setBasketProducts(updateProducts(productId, newCount));
    };

    const revert = (id) => {
        setBasketProducts(updateProducts(id, 1));
    }

    return (
        <section className="py-12">
            <div style={{background: "#FEF5E7"}} className="w-full max-w-7xl p-4 md:px-5 lg-6 mx-auto rounded-md">
                <h2 className="title font-manrope font-bold text-3xl leading-10 mb-8  text-gray-700">
                    Товары в корзине
                </h2>
                <FooterDivider style={{margin: "10px 0"}}/>
                <div className="hidden lg:grid grid-cols-2 py-6">
                    <div className="font-normal text-xl leading-8 text-gray-500">Товар</div>
                    <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                        <span className="w-full max-w-[200px] text-center">Доставка</span>
                        <span className="w-full max-w-[200px] text-center">Количество</span>
                        <span className="w-full max-w-[200px] text-center">Всего</span>
                    </p>
                </div>

                {basketProducts.map((product, index) => (
                    <div key={index + 1}
                         className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                        <div
                            className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                            <div className="relative img-box  xl:w-[160px] h-full">
                                <Image src={product.img} alt={"img"} fill objectFit="cover"/>
                            </div>
                            <div className="pro-data w-full max-w-sm">
                                <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{product.category} {product.product_type}</h5>
                                <p className="font-normal text-md leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                    {product.thickness}x{product.width}x{product.length}
                                </p>
                                <h6 className="font-bold text-md leading-8 text-amber-600 max-[550px]:text-center">{product.price} RUB</h6>
                            </div>
                        </div>
                        <div
                            className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                            <h6 className="font-manrope font-semibold text-md leading-9 text-gray-700 w-full max-w-[176px] text-center">
                                {product.delivery} RUB {' '}
                                <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(Delivery Charge)</span>
                            </h6>
                            <div className="flex items-center w-full mx-auto justify-center">
                                <button
                                    onClick={() => handleMinusCount(product.id, product.count -= 1)}
                                    className="group rounded-l-full px-2 py-2 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                    <svg
                                        className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                    >
                                        <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round"/>
                                        <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                              strokeLinecap="round"/>
                                        <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                              strokeLinecap="round"/>
                                    </svg>
                                </button>
                                <div className={styles.input_box}>
                                    <input
                                        type="number"
                                        value={product.count}
                                        onChange={(e) => handleCountChange(product.id, Number(e.target.value))}
                                        min="1" // Optionally set min value
                                        step="1" // Optionally set step value
                                        className={`border-y border-gray-200
                                     outline-none text-gray-900
                                      font-semibold text-sm w-full max-w-[48px]
                                       placeholder:text-gray-900 py-2 text-center 
                                       bg-transparent ${styles.count_input}`}
                                    />
                                    {product.count <= 0 ?
                                        <ToastUIComponent
                                            revert={revert}
                                            id={product.id}
                                            open={toastOpened}
                                            timeout={seconds}
                                        />
                                        : ''}
                                </div>
                                <button
                                    onClick={() => handlePlusCount(product.id, product.count += 1)}
                                    className="group rounded-r-full px-2 py-2 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                    <svg
                                        className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                    >
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                              strokeLinecap="round"/>
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                                              strokeWidth="1.6" strokeLinecap="round"/>
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2"
                                              strokeWidth="1.6" strokeLinecap="round"/>
                                    </svg>
                                </button>
                            </div>
                            <h6 className="text-amber-600 font-manrope font-bold text-md leading-9 w-full max-w-[200px] text-center">
                                {calculateProductTotalPrice(Number(product.count), Number(product.price), Number(product.delivery))}
                            </h6>
                        </div>
                    </div>
                ))};

                <div className="bg-gray-200 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                    <div className="flex items-center justify-between w-full mb-3">
                        <p className="font-normal text-xl leading-8 text-gray-600">Подытог</p>
                        <h6 className="font-semibold text-md leading-8 text-gray-900">{allPrices} RUB</h6>
                    </div>
                    <div className="flex items-center justify-between w-full pb-2 border-b border-gray-200">
                        <p className="font-normal text-xl leading-8 text-gray-600">Стоимость доставки</p>
                        <h6 className="font-semibold text-md leading-8 text-gray-900">{allDelivery} RUB</h6>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Всего</p>
                        <h6 className="font-manrope font-medium text-xl leading-9 text-amber-500">{allPrices + allDelivery} RUB</h6>
                    </div>
                </div>
                <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                    <button
                        className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-amber-900 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-amber-700">
                        Перейти к оплате
                        <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22"
                             viewBox="0 0 23 22" fill="none">
                            <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BasketPage;
