import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "briancoco",
  description: "Brian Nguyen's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${geistMono.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
