import React, { useEffect, useRef } from 'react';
import { gsap, Power1 } from 'gsap';

interface ImageGridProps {
    imgSrc: string;
    containerName: string;
    rows: number;
    columns: number;
    margin: number;
    animTime: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({ imgSrc, containerName, rows, columns, margin, animTime }) => {
    const placeholderRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!placeholderRef.current || !containerRef.current) return;

        const r = rows;
        const c = columns;
        const marginVal = margin;

        const placeholder = placeholderRef.current;
        const container = containerRef.current;

        const w = (container.offsetWidth / c) - marginVal;
        const h = (container.offsetHeight / r) - marginVal;

        const gridTiles: HTMLDivElement[] = [];

        for (let i = 0, l = r * c; i < l; i++) {
            const gridTile = document.createElement('div');
            gridTile.className = 'gridTile';
            gridTile.style.backgroundImage = `url(${imgSrc})`;

            const arr = [
                (w + marginVal) * (i % c),
                (h + marginVal) * Math.floor(i / c),
                ((w + marginVal) * (i % c) + w - marginVal),
                (h + marginVal) * Math.floor(i / c),
                ((w + marginVal) * (i % c) + w - marginVal),
                ((h + marginVal) * Math.floor(i / c) + h - marginVal),
                (w + marginVal) * (i % c),
                ((h + marginVal) * Math.floor(i / c) + h - marginVal)
            ];

            gsap.set(gridTile, {
                webkitClipPath: `polygon(${arr[0]}px ${arr[1]}px, ${arr[2]}px ${arr[3]}px, ${arr[4]}px ${arr[5]}px, ${arr[6]}px ${arr[7]}px)`,
                clipPath: `polygon(${arr[0]}px ${arr[1]}px, ${arr[2]}px ${arr[3]}px, ${arr[4]}px ${arr[5]}px, ${arr[6]}px ${arr[7]}px)`
            });

            container.appendChild(gridTile);
            gridTiles.push(gridTile);

            fixTilePosition(gridTile, i);
        }

        const handleMouseOver = () => {
            gridTiles.forEach(tile => {
                gsap.to(tile, { duration: animTime, css: { backgroundPosition: '0px 0px' }, ease: Power1.easeOut });
            });
        };

        const handleMouseLeave = () => {
            gridTiles.forEach((tile, index) => {
                fixTilePosition(tile, index, animTime);
            });
        };

        placeholder.addEventListener('mouseover', handleMouseOver);
        placeholder.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            placeholder.removeEventListener('mouseover', handleMouseOver);
            placeholder.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [imgSrc, rows, columns, margin, animTime]);

    const fixTilePosition = (tile: HTMLDivElement, ind: number, time: number = 0) => {
        if (!containerRef.current) return;

        const r = rows;
        const c = columns;

        const centr = Math.floor(c * r / 2);
        const centrCol = Math.ceil(centr / c);
        const centrRow = Math.ceil(centr / r);

        const w = (containerRef.current.offsetWidth / c) - margin;
        const h = (containerRef.current.offsetHeight / r) - margin;

        const offsetW = w / centrCol;
        const offsetH = h / centrRow;

        const left = Math.round((ind % c - centrCol + 1) * offsetW);
        const top = Math.round((Math.floor(ind / c) - centrRow + 1) * offsetH);

        gsap.to(tile, { duration: time, css: { backgroundPosition: `${left}px ${top}px` }, ease: Power1.easeOut });
    };

    return (
        <div className={containerName} ref={placeholderRef}>
            <div className="gridContainer" ref={containerRef}></div>
        </div>
    );
};

export default ImageGrid;

// Usage
const options: ImageGridProps = {
    imgSrc: 'https://unsplash.it/g/1024/768?image=874',
    containerName: 'placeholder',
    rows: 5,
    columns: 5,
    margin: 2.5,
    animTime: 0.3
};