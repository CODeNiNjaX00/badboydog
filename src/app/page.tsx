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
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Updated logo section with animation */}
          <div className="relative w-96 h-96 mb-8 animate-logo">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full animate-border-glow"></div>
              <Image
                src="/badboylogo.jpeg"
                alt="Bad Boy DOG"
                width={800}
                height={800}
                className="rounded-full border-8 border-yellow-400 shadow-[0_0_50px_rgba(234,179,8,0.5)] object-cover w-full h-full relative z-10 group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            $BAD BOY DOG
          </h1>
          
          <p className="text-2xl md:text-3xl font-bold text-yellow-400">
            🚀 The Goodest Bad Boy in Crypto! 🐕
          </p>
          
          <p className="text-2xl md:text-3xl font-bold text-yellow-400 animate-glow-pulse bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2">
            🎥 Launching LIVE on Pumpfun Platform! 📺
          </p>

          {/* Add Countdown Timer */}
          <CountdownTimer />

          {/* Token Stats - Updated with Launch Platform */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-yellow-400 text-xl">Total Supply</h3>
              <p className="text-2xl font-bold">1,000,000,000</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-yellow-400 text-xl">Launch Platform</h3>
              <p className="text-2xl font-bold">Pumpfun.com</p>
            </div>
          </div>

          {/* Buy Button and Social Media Buttons */}
          <div className="flex flex-col gap-4 items-center w-full max-w-md">
            <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl px-12 py-4 rounded-full hover:scale-105 transform transition-all shadow-[0_0_30px_rgba(234,179,8,0.5)]">
              🦴 Buy $BADDOG Now!
            </button>
            
            <a 
              href="https://t.me/badboydogsol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl px-12 py-4 rounded-full hover:scale-105 transform transition-all shadow-[0_0_30px_rgba(234,179,8,0.5)] flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-telegram text-2xl"></i> Channel
            </a>

            <a 
              href="https://t.me/+IH94_8NC2PU4NjE0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl px-12 py-4 rounded-full hover:scale-105 transform transition-all shadow-[0_0_30px_rgba(234,179,8,0.5)] flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-telegram text-2xl"></i> Group
            </a>

            <a 
              href="https://x.com/BadBoyDOGsoll" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl px-12 py-4 rounded-full hover:scale-105 transform transition-all shadow-[0_0_30px_rgba(234,179,8,0.5)] flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-x-twitter text-2xl"></i> Twitter
            </a>
          </div>
        </div>

        {/* Updated Features Section with more details */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">🔒 Safe & Secure</h3>
            <p>Liquidity locked for 2 years. Contract audited by top security firms. Your funds are safe with this good boy!</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">💎 Community Driven</h3>
            <p>No team tokens! 100% community owned. Join our pack of diamond-pawed holders!</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">🚀 Moon Mission</h3>
            <p>Revolutionary tokenomics with 1% burn on each transaction. Decreasing supply, increasing value!</p>
          </div>
        </div>

        {/* New Ecosystem Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            🐾 BadBoy Ecosystem 🐾
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">🎮 BadBoy P2E Game</h3>
              <p className="mb-4">Play-to-Earn game where players train and battle their virtual BadBoy dogs. Earn $BADDOG tokens while playing!</p>
              <ul className="list-disc list-inside text-sm space-y-2 text-yellow-400/80">
                <li>NFT Character System</li>
                <li>Daily Tournaments</li>
                <li>Breeding Mechanism</li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">🎨 NFT Collection</h3>
              <p className="mb-4">Limited edition BadBoy NFT collection with unique traits and special utilities within our ecosystem.</p>
              <ul className="list-disc list-inside text-sm space-y-2 text-yellow-400/80">
                <li>10,000 Unique BadBoys</li>
                <li>Staking Rewards</li>
                <li>Exclusive Access to Events</li>
              </ul>
            </div>
          </div>
        </div>

        {/* New Tokenomics Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <h3 className="text-yellow-400 text-lg mb-2">Burn 🔥</h3>
              <p className="text-2xl font-bold">1%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <h3 className="text-yellow-400 text-lg mb-2">Marketing 📈</h3>
              <p className="text-2xl font-bold">2%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <h3 className="text-yellow-400 text-lg mb-2">Liquidity 💧</h3>
              <p className="text-2xl font-bold">2%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <h3 className="text-yellow-400 text-lg mb-2">Rewards 🎁</h3>
              <p className="text-2xl font-bold">1%</p>
            </div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="mt-32 mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Phase 1</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Token Launch</li>
                <li>✅ Website Launch</li>
                <li>✅ Community Building</li>
                <li>⏳ 1,000 Holders</li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Phase 2</h3>
              <ul className="space-y-2 text-sm">
                <li>NFT Collection Launch</li>
                <li>CEX Listings</li>
                <li>Marketing Campaign</li>
                <li>5,000 Holders</li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Phase 3</h3>
              <ul className="space-y-2 text-sm">
                <li>P2E Game Beta</li>
                <li>Partnerships</li>
                <li>NFT Marketplace</li>
                <li>20,000 Holders</li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Phase 4</h3>
              <ul className="space-y-2 text-sm">
                <li>Game Full Release</li>
                <li>Major CEX Listings</li>
                <li>BadBoy DAO</li>
                <li>100,000 Holders</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links - Updated with correct links */}
        <div className="flex justify-center space-x-6 mt-20">
          <a 
            href="https://t.me/badboydogsol" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-4xl hover:text-yellow-400 transition-colors"
          >
            <i className="fab fa-telegram"></i>
          </a>
          <a 
            href="https://t.me/+IH94_8NC2PU4NjE0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-4xl hover:text-yellow-400 transition-colors"
          >
            <i className="fab fa-telegram"></i>
          </a>
          <a 
            href="https://x.com/BadBoyDOGsoll" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-4xl hover:text-yellow-400 transition-colors"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </main>
    </div>
  );
}
