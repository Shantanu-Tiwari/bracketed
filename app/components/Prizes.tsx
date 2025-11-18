// app/components/Prizes/Prizes.tsx

// Import your model component
import TrophyModel from './TrophyModel';

export default function Prizes() {
    return (
        // 1. Make the whole section 'relative' to anchor the model
        //    and 'overflow-hidden' to prevent any weird side-scrolling
        <section className="relative bg-black py-24 overflow-hidden">

            {/* 2. This container holds both the text and the model */}
            {/* We use flex to make the two columns */}
            <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">

                {/* --- COLUMN 1: Prizes & Other Things --- */}
                {/* 3. This is the text content, set to take up half the width
               We add 'relative z-10' to make sure it's on top */}
                <div className="w-full md:w-1/2 text-white relative z-10">
                    <h2 className="font-heading text-left text-7xl uppercase text-white">
                        Prizes & Details
                    </h2>

                    <div className="mt-16">
                        <h3 className="font-heading text-4xl uppercase">Prize Pool</h3>
                        <p className="mt-4 text-lg text-gray-300">
                            We're not just playing for glory. Check out the rewards for our
                            top competitors.
                        </p>
                        <div className="mt-6 space-y-6">
                            <div>
                                <h4 className="font-bold text-xl mb-2">Valorant</h4>
                                <ul className="list-disc space-y-1 pl-5 text-lg">
                                    <li><span className="font-bold">Winner:</span> ₹2,500</li>
                                    <li><span className="font-bold">Runner-up:</span> ₹1,500</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-2">BGMI</h4>
                                <ul className="list-disc space-y-1 pl-5 text-lg">
                                    <li><span className="font-bold">1st:</span> ₹3,200</li>
                                    <li><span className="font-bold">2nd:</span> ₹1,600</li>
                                    <li><span className="font-bold">3rd:</span> ₹800</li>
                                    <li><span className="font-bold">4th:</span> ₹400</li>
                                    <li><span className="font-bold">5th:</span> ₹400</li>
                                    <li><span className="font-bold">MVP:</span> ₹600</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="font-heading mt-8 text-4xl uppercase">Rules & Info</h3>
                        <p className="mt-4 text-lg text-gray-300">
                            All matches will be played on standard competitive settings.
                            Be respectful, play fair, and no cheating.
                        </p>
                        <div className="mt-4 space-x-4">
                            <a 
                                href="https://drive.google.com/file/d/1EiXKf-5y8cfDK-39GWiDVHrlTPIfyFFR/view?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block text-blue-400 hover:text-blue-300 underline"
                            >
                                Valorant Rulebook
                            </a>
                            <a 
                                href="https://drive.google.com/file/d/1EQR-ZqNBg4dISH6323H6b1Pc-vBe-sww/view?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block text-blue-400 hover:text-blue-300 underline"
                            >
                                BGMI Rulebook
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- COLUMN 2: 3D Model (Now Positioned) --- */}
                {/* 4. This div is the container for the 3D model */}
                {/* It is positioned absolutely to the right side of the section */}
                <div className="w-full h-[500px] md:h-full md:w-1/2 md:absolute md:top-0 md:right-0 z-0">
                    <TrophyModel modelPath="/trophy.glb" />
                </div>

            </div>
        </section>
    );
}