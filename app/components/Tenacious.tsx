import Image from "next/image";

export default function Tenacious() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="/tns.png"
              alt="Tenacious Logo"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <a 
              href="https://www.instagram.com/tenacious_jss/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-heading text-4xl md:text-7xl uppercase text-white mb-6 hover:text-muted-foreground hover:underline transition-colors inline-block"
            >
              Tenacious
            </a>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tenacious is the official esports and editing society of JSS Academy of Technical Education, Noida. 
              We are dedicated to fostering competitive gaming excellence and creative digital content creation 
              among students, providing a platform for gamers and content creators to showcase their skills and passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}