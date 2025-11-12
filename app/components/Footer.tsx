// app/components/Footer/Footer.tsx
import Link from 'next/link';
import React from 'react';

// A simple SVG icon for X (Twitter)
const XIcon = () => (
    <svg
        className="h-6 w-6 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

// A simple SVG icon for Discord
const DiscordIcon = () => (
    <svg
        className="h-6 w-6 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.368-.42.738-.608 1.134a18.06 18.06 0 00-5.488 0 18.2 18.2 0 00-.617-1.134.07.07 0 00-.079-.037A19.718 19.718 0 003.679 4.37a.07.07 0 00-.033.055c-.344 3.252-.398 6.59-.093 9.805a.077.077 0 00.024.058c1.43 1.137 2.946 2.002 4.542 2.656a.075.075 0 00.086-.005c.338-.204.663-.418.973-.645a.07.07 0 00.011-.088c-.083-.14-.16-.282-.232-.428a.068.068 0 01.011-.09c.126-.06.252-.122.375-.187a.068.068 0 01.074-.005c1.023.572 2.148.98 3.349 1.201a.074.074 0 00.086-.063c.032-.212.06-.427.08-.645a.075.075 0 00-.011-.088c-.074-.118-.147-.237-.216-.356a.068.068 0 01.005-.091c.12-.06.237-.122.352-.184a.07.07 0 01.075.005c.308.226.63.44.966.646a.075.075 0 00.086.005c1.597-.655 3.113-1.52 4.543-2.657a.077.077 0 00.024-.058c.305-3.215.25-6.553-.093-9.805a.07.07 0 00-.032-.055zM8.02 15.33c-.84 0-1.522-.683-1.522-1.523s.682-1.523 1.522-1.523 1.523.683 1.523 1.523-.683 1.523-1.523 1.523zm7.954 0c-.84 0-1.522-.683-1.522-1.523s.682-1.523 1.522-1.523 1.523.683 1.523 1.523-.683 1.523-1.523 1.523z" />
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
                                    href="/register/event-one"
                                    className="text-gray-300 transition-colors hover:text-white"
                                >
                                    Event One: Valorant
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/register/event-two"
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
                                href="https://twitter.com" // Change to your link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 transition-colors hover:text-white"
                            >
                                <span className="sr-only">X (Twitter)</span>
                                <XIcon />
                            </a>
                            <a
                                href="https://discord.com" // Change to your link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 transition-colors hover:text-white"
                            >
                                <span className="sr-only">Discord</span>
                                <DiscordIcon />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <hr className="my-12 border-gray-700" />

                {/* --- UPDATED SECTION --- */}
                <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
                    {/* Left Side: Copyright */}
                    <p className="text-sm text-green-400 text-center md:text-left">
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