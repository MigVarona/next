"use client"
import React from "react";
import ReactDOM from "react-dom/client";
import { Inter } from 'next/font/google';
import { NextUIProvider } from "@nextui-org/react";

import './globals.css';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap your application with NextUIProvider */}
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
