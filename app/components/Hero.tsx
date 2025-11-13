"use client";

import Link from 'next/link';
import React from 'react';
import CountdownTimer from "@/app/components/Countdown"; // Make sure this path is correct

export default function Hero() {
    const EVENT_ONE_DATE = "2025-11-28T09:00:00";
    return (
        <section
            className="relative flex h-dvh flex-col items-center justify-start pt-40 md:pt-80 bg-cover bg-top text-center text-white"
            style={{
                backgroundImage:"linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), linear-gradient(to bottom, transparent 60%, #000 95%), url('/valorant.jpg')",
            }}
        >

            {/* 3. FIXED: 'z-10' -> 'z-30' (to be on top of the z-20 bar) */}
            <div className="z-30 flex flex-col items-center px-6 container mx-auto">
                <h1 className="font-heading max-w-4xl text-5xl uppercase tracking-wider md:text-7xl lg:text-8xl">
                    Build A Paradise For Warriors In The Afterlife
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
                    Join the ultimate gaming tournaments. Prove your skill, claim your
                    glory, and register for our two upcoming events.
                </p>
            </div>

            {/* This bar is z-20 */}
            <div
                className="
                  absolute bottom-0 left-0 w-full
                  translate-y-1/2
                  bg-green-400 bg-opacity-50
                  backdrop-blur-sm py-6 px-6 z-20
                "
            >
                <div
                    className="
                      container mx-auto
                      flex flex-col items-center gap-4
                      sm:flex-row sm:justify-between
                    "
                >
                    <CountdownTimer targetDate={EVENT_ONE_DATE} />
                    <div className="flex flex-col text-center">
                        {/* I also fixed your "Don't miss out!" text to be visible on the green */}
                        <span className="text-black text-lg font-bold uppercase tracking-wider">Competition Starts Soon</span>
                        <span className="text-sm text-gray-800">Don't miss out!</span>
                    </div>
                    <button
                        onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                        className="rounded-md bg-black px-8 py-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-blue-700">
                        Register NOW!
                    </button>
                </div>
            </div>

        </section>
    );
}