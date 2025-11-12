"use client"; // This component must be a Client Component

import { useState, useEffect } from 'react';

type Props = {
    targetDate: string; // The date we're counting down to
};

// Helper function to format numbers with a leading zero
function pad(num: number) {
    return num.toString().padStart(2, '0');
}

// A function to calculate the time remaining
const calculateTimeLeft = (targetDate: string) => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    // If the countdown is over
    if (difference < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calculate time parts
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
};

// Component for each time segment (e.g., "03 DAYS")
const TimeSegment = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
    <span className="font-heading text-4xl tracking-wider md:text-5xl">
      {pad(value)}
    </span>
        <span className="text-xs font-medium uppercase tracking-widest text-black">
      {label}
    </span>
    </div>
);

export default function CountdownTimer({ targetDate }: Props) {

    // 1. ADD THIS STATE TO PREVENT HYDRATION ERRORS
    const [isClient, setIsClient] = useState(false);

    // 2. Initialize state with the initial time left
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    // 3. Set up an interval to update the timer every second
    useEffect(() => {
        // This ensures this code runs ONLY on the client
        setIsClient(true);

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(timer);
    }, [targetDate]); // Re-run effect if the targetDate changes


    return (
        <div className="flex items-start gap-3 text-black">
            {/* 4. USE 'isClient' TO RENDER.
              On the server, this will render 00:00:00:00.
              On the client, it will immediately update to the real time,
              preventing the server/client mismatch.
            */}
            <TimeSegment value={isClient ? timeLeft.days : 0} label="Days" />
            <span className="font-heading text-3xl mt-1 md:text-4xl">:</span>
            <TimeSegment value={isClient ? timeLeft.hours : 0} label="Hours" />
            <span className="font-heading text-3xl mt-1 md:text-4xl">:</span>
            <TimeSegment value={isClient ? timeLeft.minutes : 0} label="Minutes" />
            <span className="font-heading text-3xl mt-1 md:text-4xl">:</span>
            <TimeSegment value={isClient ? timeLeft.seconds : 0} label="Seconds" />
        </div>
    );
}