'use client'

import React from 'react';
import { Carousel } from "flowbite-react";
import styles from "./slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Image, {StaticImageData} from "next/image";

interface SliderComponentProps {
    images: StaticImageData[]; // Adjust the type to StaticImageData
}

function SliderComponent({ images }: SliderComponentProps): JSX.Element {
    const imageURLs: string[] = images.map(image => image.src);

    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96" style={{ height: 500 }}>
            {imageURLs && imageURLs.length > 0 ?
                <Carousel className={styles.slider_wrapper}
                          leftControl={<FontAwesomeIcon className={styles.slider_control} icon={faCaretLeft} />}
                          rightControl={<FontAwesomeIcon className={styles.slider_control} icon={faCaretRight} />}>
                    {imageURLs.map((image, index) => ( // Use imageURLs here
                        <div className={styles.slider_item} key={index + 1}>
                            <div className={styles.slider_image_box}>
                                <Image key={index + 1}
                                       className={styles.slider_image}
                                       sizes="100vm"
                                       fill
                                       src={image} alt="..." priority />
                            </div>
                            <div className={styles.slider_content}>
                                <h1 className={styles.slider_title}>This is image title</h1>
                                <p className={styles.slider_description}>This is image description This is image
                                    description This is image description This is
                                    image description This is image description</p>
                                <button type="button"
                                        className={`${styles.slider_btn} py-2.5 px-5
                                        me-2 mb-2 text-sm font-medium
                                        text-gray-900 focus:outline-none
                                        bg-white rounded-lg border
                                        border-gray-200 hover:bg-gray-100
                                        hover:text-blue-700 focus:z-10
                                        focus:ring-4 focus:ring-gray-100
                                        dark:focus:ring-gray-700 dark:bg-gray-800
                                        dark:text-gray-400 dark:border-gray-600
                                        dark:hover:text-white dark:hover:bg-gray-700 `}>Подробнее
                                </button>
                            </div>
                        </div>
                    ))}
                </Carousel>
                : <>Images not found</>}
        </div>
    );
}

export default SliderComponent;
