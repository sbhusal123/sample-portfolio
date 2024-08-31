import { Inter } from "next/font/google";
import "./globals.css";

import { NarBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Webfriend | Leading IT Company in Australia</title>
      </head>
      <body>
        <NarBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
