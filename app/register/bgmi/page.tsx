import BgmiForm from '@/app/components/FormBgmi';
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterBgmiPage() {
    return (
        <div className="flex h-dvh overflow-hidden bg-black">

            {/* Left Side: Sticky Image Panel */}
            {/* 1. Add 'relative' */}
            <div className="hidden md:block md:w-1/2 h-full sticky top-0 relative">

                {/* 2. DESKTOP back link */}
                <Link
                    href="/"
                    className="absolute top-8 left-8 z-10 font-heading text-2xl uppercase tracking-wider text-white hover:text-gray-400 transition-colors"
                >
                    &lt; Bracketed
                </Link>

                <div className="relative h-full w-full">
                    <Image
                        src="/bgmiform.jpg"
                        alt="BGMI Background"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
            </div>

            {/* Right Side: Scrollable Form Panel */}
            <div className="w-full md:w-1/2 overflow-y-auto relative">

                {/* 3. MOBILE back link (hidden on desktop) */}
                <Link
                    href="/"
                    className="absolute top-8 left-8 font-heading text-2xl uppercase tracking-wider text-white hover:text-gray-400 transition-colors md:hidden"
                >
                    &lt; Bracketed
                </Link>

                {/* 4. Keep padding for the mobile link */}
                <div className="flex justify-center pt-32 pb-16 md:py-20">
                    <BgmiForm />
                </div>
            </div>
        </div>
    );
}