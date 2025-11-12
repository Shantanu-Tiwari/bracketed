// app/components/Prizes/LazyTrophyModel.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import TrophyModel from './TrophyModel';

export default function LazyTrophyModel({ modelPath }) {
    const [isVisible, setIsVisible] = useState(false);
    const placeholderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            // Start loading when it's 50% on screen
            { threshold: 0.5 }
        );

        if (placeholderRef.current) {
            observer.observe(placeholderRef.current);
        }

        return () => {
            if (placeholderRef.current) {
                observer.unobserve(placeholderRef.current);
            }
        };
    }, []);

    return (
        // This div is the same size as your model component
        <div ref={placeholderRef} className="h-full w-full">
            {/* Only render the heavy 3D model if isVisible is true.
        Until then, it's just an empty, lightweight div.
      */}
            {isVisible && <TrophyModel modelPath={modelPath} />}
        </div>
    );
}