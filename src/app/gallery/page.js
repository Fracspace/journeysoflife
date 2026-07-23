"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Wedding", "Birthday", "Baby", "Vacation", "Graduation", "Festivals", "Family"];

  const galleryItems = [
    { id: "gal-0", cat: "Wedding", ar: "aspect-[3/4]", p: "wedding · warm" },
    { id: "gal-1", cat: "Baby", ar: "aspect-[1/1]", p: "baby · warm" },
    { id: "gal-2", cat: "Family", ar: "aspect-[4/5]", p: "family · warm" },
    { id: "gal-3", cat: "Birthday", ar: "aspect-[3/4]", p: "birthday · warm" },
    { id: "gal-4", cat: "Festivals", ar: "aspect-[1/1]", p: "festivals · warm" },
    { id: "gal-5", cat: "Vacation", ar: "aspect-[4/3]", p: "vacation · warm" },
    { id: "gal-6", cat: "Graduation", ar: "aspect-[3/4]", p: "graduation · warm" },
    { id: "gal-7", cat: "Family", ar: "aspect-[1/1]", p: "family · warm" },
    { id: "gal-8", cat: "Wedding", ar: "aspect-[4/5]", p: "wedding · warm" },
    { id: "gal-9", cat: "Baby", ar: "aspect-[3/4]", p: "baby · warm" },
    { id: "gal-10", cat: "Birthday", ar: "aspect-[1/1]", p: "birthday · warm" },
    { id: "gal-11", cat: "Vacation", ar: "aspect-[3/4]", p: "vacation · warm" },
    { id: "gal-12", cat: "Festivals", ar: "aspect-[4/5]", p: "festivals · warm" },
    { id: "gal-13", cat: "Family", ar: "aspect-[3/4]", p: "family · warm" },
    { id: "gal-14", cat: "Graduation", ar: "aspect-[1/1]", p: "graduation · warm" },
    { id: "gal-15", cat: "Wedding", ar: "aspect-[4/3]", p: "wedding · warm" }
  ];

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.cat === filter);

  return (
    <>
      <Navbar />

      <main className="relative flex-1">
        
        {/* ============ HERO ============ */}
        <section className="relative bg-gradient-to-r from-bg-cream to-bg-tan pt-[158px] pb-[90px] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(214,179,106,0.1),transparent_45%)] pointer-events-none"></div>
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center relative z-10">
            <div className="max-w-[560px]">
              <Reveal className="flex items-center gap-3.5 mb-4">
                <span className="w-9 h-[1px] bg-primary"></span>
                <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">Gallery</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-cormorant font-normal text-[40px] md:text-[70px] leading-[1.04] mb-5 text-text-dark">
                  A gallery of<br />
                  <span className="italic text-primary">moments.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[16.5px] leading-relaxed text-text-gray max-w-[460px]">
                  Golden-hour weddings, first steps, festival lights and quiet everyday magic — a wall of the moments families have trusted us to keep.
                </p>
              </Reveal>
            </div>

            <Reveal className="relative aspect-[5/4] rounded-[200px_24px_200px_24px] overflow-hidden shadow-[0_40px_90px_-34px_rgba(110,86,68,0.55)]">
              <ImageSlot id="gal-hero" shape="rect" placeholder="Wall of framed family photographs · warm" />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark/20 via-transparent to-primary-light/20 pointer-events-none"></div>
            </Reveal>
          </div>
        </section>

        {/* ============ GALLERY GRID ============ */}
        <section className="py-[70px] pb-[110px] bg-bg-cream">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            
            {/* Filter Buttons */}
            <Reveal className="flex flex-wrap justify-center gap-2.5 mb-11">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`border px-5 py-2.5 rounded-full text-[11.5px] tracking-[0.12em] uppercase font-semibold transition-all duration-300 cursor-pointer ${
                    filter === cat
                      ? "bg-bg-dark text-bg-cream border-bg-dark"
                      : "bg-transparent text-text-dark border-[#6E5644]/30 hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </Reveal>

            {/* Filtered Grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5">
              {filteredItems.map((item, i) => (
                <Reveal 
                  key={item.id} 
                  delay={0.05 * (i % 4)} 
                  className="break-inside-avoid mb-5 relative rounded-2xl overflow-hidden shadow-[0_16px_38px_-24px_rgba(110,86,68,0.5)] cursor-pointer group"
                >
                  <div className={`relative ${item.ar} overflow-hidden`}>
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-107">
                      <ImageSlot id={item.id} shape="rect" placeholder={item.p} />
                    </div>
                    {/* Hover Caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-bg-cream font-cormorant italic text-[19px] font-medium leading-none">
                        {item.cat}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="relative min-h-[64vh] flex items-center overflow-hidden py-[100px]">
          <div className="absolute inset-0">
            <ImageSlot id="cta-band-bg" shape="rect" placeholder="Sunset · family together · cinematic" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/85 via-bg-dark/45 to-bg-dark/60 pointer-events-none"></div>
          
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 w-full z-10">
            <div className="max-w-[600px]">
              <Reveal>
                <p className="font-caveat text-[28px] text-primary-light mb-3">Your story is waiting.</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-cormorant font-normal text-[34px] md:text-[58px] leading-[1.06] text-[#F8F5EF] mb-7">
                  Let's turn your memories into a film you'll treasure forever.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3.5 bg-[#D6B36A] text-[#1E1B18] px-8.5 py-5 rounded-full text-[12.5px] tracking-[0.16em] uppercase font-semibold transition-all duration-400 hover:bg-[#F8F5EF] hover:-translate-y-1"
                >
                  Begin Your Journey 
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
