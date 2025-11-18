import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import EventList from "@/app/components/EventList";
import Prizes from "@/app/components/Prizes";
import Tenacious from "@/app/components/Tenacious";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <EventList/>
        <Prizes/>
        <Tenacious/>
        <Footer/>
    </div>
      );
}
