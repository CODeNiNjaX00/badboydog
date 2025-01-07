"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Add CountdownTimer component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-01-01T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 justify-center mt-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 min-w-[120px]">
        <div className="text-4xl font-bold text-yellow-400">{timeLeft.days}</div>
        <div className="text-sm text-yellow-400/80">Days</div>
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 min-w-[120px]">
        <div className="text-4xl font-bold text-yellow-400">{timeLeft.hours}</div>
        <div className="text-sm text-yellow-400/80">Hours</div>
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 min-w-[120px]">
        <div className="text-4xl font-bold text-yellow-400">{timeLeft.minutes}</div>
        <div className="text-sm text-yellow-400/80">Minutes</div>
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 min-w-[120px]">
        <div className="text-4xl font-bold text-yellow-400">{timeLeft.seconds}</div>
        <div className="text-sm text-yellow-400/80">Seconds</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-white">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">Bad Boy DOG</h1>
            <p className="text-xl mb-8">The Goodest Bad Boy in Crypto!</p>
            
            {/* Call to Action Buttons */}
            <div className="flex gap-4 justify-center">
              <a 
                href="#" 
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
              >
                Buy Now
              </a>
              <a 
                href="#" 
                className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8">
            <a href="#" className="text-white hover:text-opacity-80 text-2xl">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#" className="text-white hover:text-opacity-80 text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-opacity-80 text-2xl">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
