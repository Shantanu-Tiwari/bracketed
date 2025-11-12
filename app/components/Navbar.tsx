"use client"; // Still required for hooks

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Interceptors from "undici-types/interceptors";
import retry = Interceptors.retry;
import {receiveBrowserLogsTurbopack} from "next/dist/server/dev/browser-logs/receive-logs";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if user has scrolled more than 10px
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <nav
            className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-in-out
        ${isScrolled ? 'py-3 bg-black shadow-lg' : 'py-6 bg-transparent'}
      `}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="font-heading text-2xl uppercase tracking-wider font-bold">
                    Bracketed
                </Link>
                <div className="flex items-center gap-6">
                    <Link href="/register/bgmi" className="text-base font-medium hover:text-white-400">
                        BGMI
                    </Link>
                    <Link href="/register/valo" className="text-base font-medium hover:text-white-400">
                        Valorant
                    </Link>

                </div>
            </div>
        </nav>
    );
}