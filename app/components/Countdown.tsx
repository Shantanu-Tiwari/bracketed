"use client"; // This component must be a Client Component

import { useState, useEffect } from 'react';

type Props = {
    targetDate: string; // The date we're counting down to
};

// Helper function to format numbers with a leading zero
function pad(num: number) {
    return num.toString().padStart(2, '0');
}

export default function CountdownTimer({ targetDate }: Props) {

    // A function to calculate the time remaining
    const calculateTimeLeft = () => {
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

    // 1. Initialize state with the initial time left
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // 2. Set up an interval to update the timer every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // 3. Clear the interval when the component is unmounted
        return () => clearInterval(timer);
    }, [targetDate]); // Re-run effect if the targetDate changes

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

    return (
        <div className="flex items-start gap-3 text-black">
            <TimeSegment value={timeLeft.days} label="Days" />
            <span className="font-heading text-3xl mt-1 md:text-4xl">:</span>
            <TimeSegment value={timeLeft.hours} label="Hours" />
            <span className="font-heading text-3xl mt-1 md:text-4xl">:</span>
            <TimeSegment value={timeLeft.minutes} label="Minutes" />
            <span className="font-heading text-3xl mt-1 md:text-4xl">:</span>
            <TimeSegment value={timeLeft.seconds} label="Seconds" />
        </div>
    );
}