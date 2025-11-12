import EventCard from './EventCard';

export default function EventList() {
    return (
        // This wrapper section will have a black background
        <section className="bg-black pt-40 pb-24 md:pt-24">
            <div className="container mx-auto px-6">
                <h2 className="font-heading text-left text-7xl uppercase text-white">
                    The Events
                </h2>
                <div className="overflow-x-hidden">
                    <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">

                        {/* The Left Card */}
                        <EventCard
                            title="Event One: Valorant"
                            description="Our premier 5v5 Valorant tournament. Bring your team or join as a free agent. Amazing prizes await the victors."
                            imageUrl="/valo-event.png" // Put this image in your /public folder
                            registerLink="/register/event-one"
                            animationDirection="left"
                        />

                        {/* The Right Card */}
                        <EventCard
                            title="Event Two: BGMI"
                            description="Drop into the arena in our high-stakes battle royale. Last squad standing takes home the glory."
                            imageUrl="/bgmi-event.jpg"
                            registerLink="/register/event-two"
                            animationDirection="right"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}