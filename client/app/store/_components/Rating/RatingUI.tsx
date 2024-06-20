'use client';

import React, {useEffect, useMemo, useState} from 'react';
import {StarEmpty, StarFullFilled, StarPercentFilled} from './Star';
import styles from "./rating.module.css";

interface StarNumbers {
    full: number;
    half: number;
    empty: number;
}

interface RatingUIProps {
    ratings: number[];
    width: string;
    height: string;
}

const RatingUI: React.FC<RatingUIProps> = ({ratings, width, height}) => {
    const [sum, setSum] = useState(0);
    const [goldenMean, setGoldenMean] = useState(0);
    const [starsForRender, setStarsForRender] = useState({
        full: [], half: [], empty: []
    });
    const [fixedRatingNum, setFixedRatingNum] = useState('');
    useEffect(() => {
        let localSum = 0;
        for (let i = 0; i < ratings.length; i++) {
            localSum += ratings[i];
        }
        setSum(localSum);
        starNumbersConfiguration(localSum);
    }, [ratings]);

    const starNumbersConfiguration = (sum: number) => {
        let goldenMean = sum / ratings.length;
        setGoldenMean(goldenMean);
        let wholePart = Number(goldenMean.toString().slice(0, 1));
        let atticPart = Number(goldenMean.toString().slice(2));

        let fullFilled = 0;
        let empty = 0;

        if (wholePart) {
            fullFilled = wholePart;
        }

        if (atticPart) {
            atticPart = Number(atticPart.toString().slice(0, 1));
            empty = 5 - 1 - fullFilled;
        } else {
            empty = 5 - fullFilled
        }

        setFixedRatingNum(wholePart + "." + atticPart);

        const newStarsForRender = {
            full: [],
            half: [],
            empty: []
        };

        for (let i = 0; i < fullFilled; i++) {
            newStarsForRender.full.push(
                <StarFullFilled width={width} height={height}  key={`full_${i + 1}`}/>
            );
        }

        if (atticPart) {
            newStarsForRender.half.push(
                <StarPercentFilled width={width} height={height} ratingId={fullFilled + 1} key={`half_${atticPart * 10}%`} filled={atticPart}/>
            );
        }

        for (let i = 0; i < empty; i++) {
            newStarsForRender.empty.push(
                <StarEmpty key={`empty_${i + 1}`} width={height} height={height} />
            );
        }

        setStarsForRender(newStarsForRender);
    }

    return (
        <>
            {starsForRender ?
                <div className={`${styles.star_rating}`}>
                    {starsForRender.full.map((fullStar) => (
                        fullStar
                    ))
                    }
                    {starsForRender.half.map((halfStar) => (
                        halfStar
                    ))
                    }
                    {starsForRender.empty.map((emptyStar) => (
                        emptyStar
                    ))
                    }

                    <span className="text-sm font-bold text-gray-600 content-center">{fixedRatingNum}</span>
                </div>
                :
                ""
            }

        </>

    );
};

export default RatingUI;
