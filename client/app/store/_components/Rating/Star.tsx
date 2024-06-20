import React from 'react';

interface StarProps {
    filled?: number;
    ratingId?: number;
    width?: string,
    height?: string;
}

export const StarEmpty: React.FC<StarProps> = ({width, height}) => (
    <svg width={width} height={height}  viewBox="0 0 25 25" style={{margin: 0, padding: 0}} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 2L14.09 8.26L20 9.27L15.45 13.97L16.82 20.02L12 16.77L7.18 20.02L8.55 13.97L4 9.27L9.91 8.26L12 2Z"
            fill="#333"
        />
    </svg>
);

export const StarFullFilled: React.FC<StarProps> = ({width, height}) => (
    <svg width={width} height={height}  viewBox="0 0 25 25" style={{margin: 0, padding: 0}} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 2L14.09 8.26L20 9.27L15.45 13.97L16.82 20.02L12 16.77L7.18 20.02L8.55 13.97L4 9.27L9.91 8.26L12 2Z"
            fill="#F1C40F"
        />
    </svg>
);

export const StarPercentFilled: React.FC<StarProps> = ({filled, ratingId, width, height}) => {
        function halfFill(maxFill: number, halfFill: number) {
            console.log(filled);
            return Math.floor((maxFill/100)*halfFill);
        }
        return (
            <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {filled >= 5 ?
                        <clipPath id={`clip_half_${filled}`}>
                            <rect x="-0.5" y="0" width={halfFill(23, filled * 10)} height="25"/>
                        </clipPath>
                        :
                        <clipPath id={`clip_half_${filled}`}>
                            <rect x="4.5" y="0" width={halfFill(23, filled * 10)} height="25"/>
                        </clipPath>
                    }

                </defs>
                <path
                    d="M12 2L14.09 8.26L20 9.27L15.45 13.97L16.82 20.02L12 16.77L7.18 20.02L8.55 13.97L4 9.27L9.91 8.26L12 2Z"
                    fill="#333"
                />
                <path
                    d="M12 2L14.09 8.26L20 9.27L15.45 13.97L16.82 20.02L12 16.77L7.18 20.02L8.55 13.97L4 9.27L9.91 8.26L12 2Z"
                    fill="#F1C40F"
                    clipPath={`url(#clip_half_${filled})`}
                />
            </svg>
        )

    }
;
