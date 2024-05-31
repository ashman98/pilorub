import React from "react";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from "@/src/component/NavBar/NavBar";
import ClientApolloProvider from "@/app/ClientApolloProvider";
import Head from "next/head";
import Header from "@/src/component/Header/Header";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
     default: 'My Awesome Blog',
      template: "%s - My Awesome Blog"
  },
  description: 'Generated by create next app',
    twitter: {
      card: "summary_large_image"
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientApolloProvider>
            <Header>
                <NavBar />
            </Header>
          {children}
        </ClientApolloProvider>
      </body>
    </html>
  )
}
