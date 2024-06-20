import React from 'react';
import styles from '../../../product/product.module.css';
import RatingLinearUI from '@/app/store/_components/Rating/RatingLinearUI';
import RatingUI from '@/app/store/_components/Rating/RatingUI';

interface RatingComponentProps {
    ratings: number[];
}

const RatingComponent: React.FC<RatingComponentProps> = ({ ratings }) => {
    return (
        <div className={styles.rating_component}>
            <div className={styles.rating_content}>
                <div className={styles.rating_stars}>
                    <RatingUI width="35" height="35" ratings={ratings}/>
                    <span className="mx-1 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"/>
                    <a href="#"
                       className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                        {12} оценок
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RatingComponent;
