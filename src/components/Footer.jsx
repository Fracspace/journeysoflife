"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {

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

          </div>

          {/* COLUMN 2 - EXPLORE */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-[#D6B36A] font-semibold">Explore</h4>
            <div className="flex flex-col gap-3 text-[14px]">
              <Link href="/stories" className="text-[#F8F5EF]/70 hover:text-primary transition-colors">Stories</Link>
              <Link href="/how-it-works" className="text-[#F8F5EF]/70 hover:text-primary transition-colors">How It Works</Link>
              <Link href="/gallery" className="text-[#F8F5EF]/70 hover:text-primary transition-colors">Gallery</Link>
            </div>
          </div>

          {/* COLUMN 3 - COMPANY */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-[#D6B36A] font-semibold">Company</h4>
            <div className="flex flex-col gap-3 text-[14px]">
              <Link href="/faqs" className="text-[#F8F5EF]/70 hover:text-primary transition-colors">FAQs</Link>
              <Link href="/contact" className="text-[#F8F5EF]/70 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          {/* COLUMN 4 - NEWSLETTER */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-[#D6B36A] font-semibold">Stay in the Story</h4>
            <p className="text-[13.5px] leading-relaxed text-[#F8F5EF]/60">
              A quiet note now and then — new films, and the moments behind them.
            </p>
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
