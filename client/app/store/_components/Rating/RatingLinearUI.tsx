import React from 'react';
import { Rating } from 'flowbite-react';

interface RatingLinearUiProps {
    ratings: number[];
}

const RatingLinearUi: React.FC<RatingLinearUiProps> = ({ratings }) => {
    const countOccurrences = (arr) => {
        const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

        arr.forEach(num => {
            if (num >= 1 && num <= 5) {
                counts[num]++;
            }
        });

        return counts;
    };

    const counts = countOccurrences(ratings);
    const totalCount = ratings.length;

    const percentages = {};
    Object.keys(counts).forEach(key => {
        percentages[key] = ((counts[key] / totalCount) * 100);
    });

    const truncatePercentage = (percentage) => {
        return percentage.toFixed(1).slice(0, 4);
    };

    return (
        <div>
            {[5,4,3,2,1].map(number => (
                <Rating.Advanced key={number} percentFilled={truncatePercentage(percentages[number])} className="mb-2">
                    {number}
                </Rating.Advanced>
            ))}
        </div>
    );
};

export default RatingLinearUi;
