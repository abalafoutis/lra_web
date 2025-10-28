import Image from "next/image";
import { Button } from "./ui/button";
import { VscRobot } from "react-icons/vsc";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Background image */}
      <div className="relative w-full">
        <Image
          src="/hero2.jpeg"
          alt="Laboratory of Robotics & Automation"
          width={1920}
          height={1080}
          className="w-full h-auto object-top"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col items-center text-white text-center z-10 px-4 
                   justify-between py-20 sm:py-24 md:py-28 lg:py-0 lg:justify-center"
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black font-heading mb-4 leading-tight">
          Intelligence in Motion
          <br />
          <span className="text-chart-4">Shaping the Future of Robotics</span>
        </h1>

        {/* Paragraph (hidden on small screens) */}
        <p className="hidden md:block text-base sm:text-lg md:text-xl mb-6 font-light leading-relaxed max-w-xl sm:max-w-2xl">
          Pioneering the next generation of intelligent systems through innovation,
          collaboration, and creativity — inspiring students to build the future
          of robotics and automation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto px-2">
          <Button
            size="lg"
            className="flex-1 sm:flex-none w-full sm:w-48 bg-chart-2/70 hover:bg-chart-2/90 
                       text-base sm:text-lg font-semibold transition-transform duration-300 
                       hover:scale-105 px-6 sm:px-8"
          >
            Research Topics
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="flex-1 sm:flex-none w-full sm:w-48 bg-white/60 text-black hover:text-white 
                       hover:bg-transparent text-base sm:text-lg font-semibold 
                       transition-transform duration-300 hover:scale-105 px-6 sm:px-8"
          >
            Active Projects
          </Button>
        </div>

        {/* 👇 Animated robot icon — visible only on large screens */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <VscRobot className="text-6xl text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
