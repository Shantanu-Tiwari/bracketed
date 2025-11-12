"use client"; // Make sure this is the very first line

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

type Props = {
    title: string;
    description: string;
    imageUrl: string;
    registerLink: string;
    animationDirection: 'left' | 'right'; // This prop will now be ignored
};

export default function EventCard({
                                      title,
                                      description,
                                      imageUrl,
                                      registerLink,
                                      animationDirection, // Ignored
                                  }: Props) {

    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 } // 50% on-screen
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    // --- THIS IS THE FADE-IN CODE ---
    const baseStyles = "transition-all duration-700 ease-out";
    const hiddenStyles = 'opacity-0'; // Start invisible
    const visibleStyles = 'opacity-100'; // End visible
    // --- END OF CODE BLOCK ---

    return (
        <div
            ref={cardRef}
            className={`
        ${baseStyles}
        ${isVisible ? visibleStyles : hiddenStyles}
        bg-gray-900 rounded-lg overflow-hidden shadow-2xl
      `}
        >
            {/* Back to using the image */}
            <img src={imageUrl} alt={title} className="w-full h-56 object-cover object-top" />

            <div className="p-6">
                <h3 className="font-heading text-3xl uppercase text-white">{title}</h3>
                <p className="mt-2 text-gray-300">{description}</p>
                <Link
                    href={registerLink}
                    className="
            inline-block mt-6 rounded-md bg-blue-600 px-6 py-2
            text-lg font-bold text-white transition-colors
            duration-300 hover:bg-blue-700
          "
                >
                    Register Now
                </Link>
            </div>
        </div>
    );
}