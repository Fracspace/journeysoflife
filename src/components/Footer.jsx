"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 2500);
  };

  return (
    <footer className="bg-[#1E1B18] text-[#F8F5EF]/70 py-20 border-t border-[#6E5644]/10">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-11 pb-14 border-b border-[#B38A42]/20">
          
          {/* COLUMN 1 - BRAND */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3.5 text-[#F8F5EF]">
              <span className="font-caveat text-[34px] text-primary leading-none">jl</span>
              <span className="block border-l border-[#B38A42]/30 pl-3.5">
                <span className="block font-cormorant font-semibold tracking-[0.18em] text-[19px] leading-none">
                  JOURNEYS
                </span>
                <span className="block text-[9px] tracking-[0.42em] text-[#D6B36A] mt-0.5">
                  OF LIFE
                </span>
              </span>
            </Link>
            <p className="font-cormorant italic text-[20px] leading-relaxed text-[#F8F5EF]/80">
              Your story. Beautifully told.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 border border-[#B38A42]/30 rounded-full flex items-center justify-center text-[#D6B36A] hover:bg-primary hover:border-primary hover:text-bg-dark transition-all duration-300"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-[#B38A42]/30 rounded-full flex items-center justify-center text-[#D6B36A] hover:bg-primary hover:border-primary hover:text-bg-dark transition-all duration-300"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5v1.8h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-[#B38A42]/30 rounded-full flex items-center justify-center text-[#D6B36A] hover:bg-primary hover:border-primary hover:text-bg-dark transition-all duration-300"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M21 8.5a19 19 0 00-.5-3.5 2.5 2.5 0 00-1.7-1.7C17.2 3 12 3 12 3s-5.2 0-6.8.3A2.5 2.5 0 003.5 5 19 19 0 003 8.5v7a19 19 0 00.5 3.5 2.5 2.5 0 001.7 1.7C6.8 21 12 21 12 21s5.2 0 6.8-.3a2.5 2.5 0 001.7-1.7 19 19 0 00.5-3.5v-7z" />
                  <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2 - EXPLORE */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-[#D6B36A] font-semibold">Explore</h4>
            <div className="flex flex-col gap-3 text-[14px]">
              <Link href="/stories" className="text-[#F8F5EF]/70 hover:text-primary transition-colors">Stories</Link>
              <Link href="/how-it-works" className="text-[#F8F5EF]/70 hover:text-primary transition-colors">How It Works</Link>
              <Link href="/gallery" className="text-[#F8F5EF]/70 hover:text-primary transition-colors">Gallery</Link>
              <Link href="/pricing" className="text-[#F8F5EF]/70 hover:text-primary transition-colors">Pricing</Link>
            </div>
          </div>

          {/* COLUMN 3 - COMPANY */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-[#D6B36A] font-semibold">Company</h4>
            <div className="flex flex-col gap-3 text-[14px]">
              <Link href="/testimonials" className="text-[#F8F5EF]/70 hover:text-primary transition-colors">Testimonials</Link>
              <Link href="/faqs" className="text-[#F8F5EF]/70 hover:text-primary transition-colors">FAQs</Link>
              <Link href="/contact" className="text-[#F8F5EF]/70 hover:text-primary transition-colors">Contact</Link>
              <a href="#" className="text-[#F8F5EF]/70 hover:text-primary transition-colors">Privacy</a>
            </div>
          </div>

          {/* COLUMN 4 - NEWSLETTER */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-[#D6B36A] font-semibold">Stay in the Story</h4>
            <p className="text-[13.5px] leading-relaxed text-[#F8F5EF]/60">
              A quiet note now and then — new films, and the moments behind them.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email" 
                className="flex-1 bg-transparent border border-[#D6B36A]/30 rounded-full px-4 py-3 text-[#F8F5EF] text-[13px] outline-none focus:border-[#D6B36A] min-w-0"
              />
              <button 
                type="submit" 
                className="flex-none bg-[#B38A42] text-[#1E1B18] w-[46px] h-[46px] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#D6B36A]"
              >
                {subscribed ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM METADATA */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-[26px] gap-5 text-[12px] text-[#F8F5EF]/45">
          <span>© 2026 Journeys of Life. Handcrafted with love.</span>
          <span className="tracking-[0.14em] uppercase">Human storytelling · No AI · Made with care</span>
        </div>
      </div>
    </footer>
  );
}
