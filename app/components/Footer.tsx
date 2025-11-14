import Link from 'next/link';
import React from 'react';
import { Twitter, Instagram } from 'lucide-react';

const DiscordIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
    </svg>
);

export default function Footer() {
    return (
        // We use bg-gray-900 to match the Prizes section background
        <footer className="bg-neutral-900 text-white py-16 mt-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Column 1: Logo & Title */}
                    <div>
                        <Link
                            href="/"
                            className="font-heading text-3xl uppercase tracking-wider"
                        >
                            Bracketed
                        </Link>
                        <p className="mt-2 text-sm text-gray-400">
                            Your ultimate destination for competitive gaming.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="font-heading text-xl uppercase tracking-wider">
                            Events
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/register/valo"
                                    className="text-gray-300 transition-colors hover:text-white"
                                >
                                    Event One: Valorant
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/register/bgmi"
                                    className="text-gray-300 transition-colors hover:text-white"
                                >
                                    Event Two: BGMI
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Social Media */}
                    <div>
                        <h3 className="font-heading text-xl uppercase tracking-wider">
                            Follow Us
                        </h3>
                        <div className="mt-4 flex gap-4">
                            <a
                                href="https://x.com/Shant_tiw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 transition-colors hover:text-white"
                            >
                                <Twitter size={24} />
                            </a>
                            <a
                                href="https://discord.gg/aFZeC2FC"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 transition-colors hover:text-white"
                            >
                                <DiscordIcon />
                            </a>
                            <a
                                href="https://www.instagram.com/tenacious_jss"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 transition-colors hover:text-white"
                            >
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <hr className="my-12 border-gray-700" />

                {/* --- UPDATED SECTION --- */}
                <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
                    {/* Left Side: Copyright */}
                    <p className="text-sm text-neutral-400 text-center md:text-left">
                        © {new Date().getFullYear()} Bracketed. All rights reserved.
                    </p>

                    {/* Center: Powered By */}
                    <p className="text-sm text-gray-400">
                        Powered by <a
                        href="https://www.instagram.com/tenacious_jss" // <-- Your IG Link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white transition-colors hover:text-green-400" // Added a green hover
                    >
                        Tenacious
                    </a>
                    </p>

                    {/* Right Side: Developed By */}
                    <p className="text-xs text-green-600">
                        <a href="https://x.com/Shant_tiw" target="_blank">Developed by  Shantanu Tiwari</a>
                    </p>
                </div>
                {/* --- END OF UPDATE --- */}

            </div>
        </footer>
    );
}