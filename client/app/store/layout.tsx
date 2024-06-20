import React, { ReactNode } from 'react';
import styles from "@/app/store/store.module.css";
import "../global.css"

interface StoreLayoutProps {
    children: ReactNode; // will be a page or nested layout
}

export default function StoreLayout({ children }: StoreLayoutProps) {
    return (
        <section className={styles.store_layout}>
            <div className="container">
                {children}
            </div>
        </section>
    );
}
