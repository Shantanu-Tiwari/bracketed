"use client";
import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint: number = 768): boolean {
    // Start with 'false' to avoid server/client mismatch (hydration error)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // This effect runs only on the client
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        // Run it once on mount to get the initial size
        checkScreenSize();

        // Add a listener for screen resizing
        window.addEventListener('resize', checkScreenSize);

        // Cleanup the listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [breakpoint]); // Re-run if the breakpoint changes

    return isMobile;
}