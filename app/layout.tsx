import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const anton = Anton({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-anton",
});

export const metadata: Metadata = {
    title: "My Awesome Website",
    description: "Using two fonts!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
        <body className={`${inter.className} ${anton.variable}`}>
        {children}
        </body>
        </html>
    );
}