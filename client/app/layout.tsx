'use client';

import React, {ReactNode} from "react";
import styles from "@/app/app_layout.module.css";
import Header from "../src/components/Header/Header";
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

const client = new ApolloClient({
    uri: '',
    cache: new InMemoryCache(),
})

config.autoAddCss = false;

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="en">
        <body className={styles.app_body}>
        <ApolloProvider client={client}>
            <main className={styles.user_layout}>
                <div className={styles.container}>
                    <Header/>
                    {children}
                </div>
            </main>
        </ApolloProvider>

        </body>
        </html>
    );
}
