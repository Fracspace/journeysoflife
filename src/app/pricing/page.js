"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";

export default function PricingPage() {
  const inclusions = [
    { num: "01", title: "Human editors" },
    { num: "02", title: "Private & secure" },
    { num: "03", title: "Photo restoration" },
    { num: "04", title: "Original scoring" }
  ];

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
                <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">Pricing</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-cormorant font-normal text-[40px] md:text-[70px] leading-[1.04] mb-5 text-text-dark">
                  Choose your<br />
                  <span className="italic text-primary">journey.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[16.5px] leading-relaxed text-text-gray max-w-[460px]">
                  Three ways to turn your memories into film — each handcrafted, each timeless. No hidden costs, only careful work.
                </p>
              </Reveal>
            </div>

            <Reveal className="relative aspect-[5/4] rounded-[200px_24px_200px_24px] overflow-hidden shadow-[0_40px_90px_-34px_rgba(110,86,68,0.55)]">
              <ImageSlot id="price-hero" shape="rect" placeholder="Elegant film packaging & coffee-table book" />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark/20 via-transparent to-primary-light/20 pointer-events-none"></div>
            </Reveal>
          </div>
        </section>

        {/* ============ CARDS SECTION ============ */}
        <section className="py-[90px] pb-[100px] bg-bg-cream">
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch pt-6">
              
              {/* CARD 1 */}
              <Reveal delay={0} className="relative flex flex-col bg-white text-text-dark rounded-2xl p-[40px_34px_36px] shadow-[0_20px_46px_-28px_rgba(110,86,68,0.5)] border border-[#6E5644]/12">
                <h3 className="font-cormorant font-medium text-[30px] mb-1.5">Memory Film</h3>
                <p className="text-[13.5px] text-text-gray mb-6">Short. Sweet. Meaningful.</p>
                
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#6E5644]/14">
                  <span className="font-cormorant text-[44px] text-primary font-semibold">₹24,999</span>
                  <span className="text-[11px] tracking-[0.14em] uppercase text-text-gray font-semibold">onwards</span>
                </div>

                <div className="flex flex-col gap-3.5 mb-8 flex-1">
                  {[
                    "5–8 minute film",
                    "Perfect for a special occasion",
                    "Photos, videos & music",
                    "Photo restoration included",
                    "Digital delivery",
                    "1 round of revisions"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[14px] leading-snug">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B38A42" strokeWidth="1.8" className="flex-none mt-0.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-[#43392f]">{feat}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact" 
                  className="block text-center bg-bg-dark text-bg-cream py-3.5 rounded-full text-[11.5px] tracking-[0.16em] uppercase font-semibold transition-all hover:bg-primary hover:text-bg-dark"
                >
                  Start Your Film
                </Link>
              </Reveal>

              {/* CARD 2 (Featured) */}
              <Reveal delay={0.08} className="relative flex flex-col bg-[#1E1B18] text-[#F8F5EF] rounded-2xl p-[44px_34px_36px] shadow-[0_40px_80px_-30px_rgba(30,27,24,0.6)] md:translate-y-[-14px] border border-[#D6B36A]/30 z-10">
                <span className="absolute top-[-13px] left-1/2 -translate-x-1/2 bg-primary text-bg-dark text-[10px] tracking-[0.2em] uppercase py-1.5 px-4.5 rounded-full font-bold">
                  Most Popular
                </span>
                
                <h3 className="font-cormorant font-medium text-[30px] mb-1.5">Legacy Film</h3>
                <p className="text-[13.5px] text-[#F8F5EF]/60 mb-6">Your story, beautifully told.</p>
                
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#D6B36A]/20">
                  <span className="font-cormorant text-[44px] text-primary-light font-semibold">₹99,999</span>
                  <span className="text-[11px] tracking-[0.14em] uppercase text-[#F8F5EF]/50 font-semibold">onwards</span>
                </div>

                <div className="flex flex-col gap-3.5 mb-8 flex-1">
                  {[
                    "15–25 minute film",
                    "Cinematic storytelling",
                    "Trailer + social reels",
                    "Original music & voiceover",
                    "Advanced colour grading",
                    "Digital archive",
                    "2 rounds of revisions"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[14px] leading-snug">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D6B36A" strokeWidth="1.8" className="flex-none mt-0.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-[#F8F5EF]/85">{feat}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact" 
                  className="block text-center bg-[#D6B36A] text-[#1E1B18] py-3.5 rounded-full text-[11.5px] tracking-[0.16em] uppercase font-semibold transition-all hover:bg-[#F8F5EF]"
                >
                  Start Your Film
                </Link>
              </Reveal>

              {/* CARD 3 */}
              <Reveal delay={0.16} className="relative flex flex-col bg-white text-text-dark rounded-2xl p-[40px_34px_36px] shadow-[0_20px_46px_-28px_rgba(110,86,68,0.5)] border border-[#6E5644]/12">
                <h3 className="font-cormorant font-medium text-[30px] mb-1.5">Heritage Documentary</h3>
                <p className="text-[13.5px] text-text-gray mb-6">For a legacy worth preserving.</p>
                
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#6E5644]/14">
                  <span className="font-cormorant text-[44px] text-primary font-semibold">₹2,50,000</span>
                  <span className="text-[11px] tracking-[0.14em] uppercase text-text-gray font-semibold">onwards</span>
                </div>

                <div className="flex flex-col gap-3.5 mb-8 flex-1">
                  {[
                    "45–60 minute film",
                    "On-location interviews & shoot",
                    "Full restoration suite",
                    "Premium packaging",
                    "Printed coffee-table book",
                    "Lifetime cloud archive",
                    "Unlimited care"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[14px] leading-snug">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B38A42" strokeWidth="1.8" className="flex-none mt-0.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-[#43392f]">{feat}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact" 
                  className="block text-center bg-bg-dark text-bg-cream py-3.5 rounded-full text-[11.5px] tracking-[0.16em] uppercase font-semibold transition-all hover:bg-primary hover:text-bg-dark"
                >
                  Start Your Film
                </Link>
              </Reveal>

            </div>

            <Reveal className="text-center text-[13.5px] text-text-gray mt-9 font-medium">
              Every package is bespoke — prices are a starting point.{" "}
              <Link href="/contact" className="border-b border-primary/40 text-primary font-semibold hover:text-primary-dark">
                Tell us your story
              </Link>{" "}
              and we'll craft the right journey for your family.
            </Reveal>

          </div>
        </section>

        {/* ============ INCLUDED IN EVERY FILM ============ */}
        <section className="py-20 bg-gradient-to-b from-bg-cream to-bg-tan border-t border-[#6E5644]/10">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <Reveal className="flex items-center justify-center gap-3.5 mb-4">
              <span className="w-9 h-[1px] bg-primary"></span>
              <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">Included in Every Film</span>
              <span className="w-9 h-[1px] bg-primary"></span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-center font-cormorant font-normal text-[28px] md:text-[46px] mb-12 text-text-dark">
                The care that comes as standard.
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {inclusions.map((inc, i) => (
                <Reveal key={inc.num} delay={i * 0.07} className="text-center bg-white rounded-2xl p-7 shadow-[0_16px_38px_-28px_rgba(110,86,68,0.5)] border border-primary/5">
                  <div className="w-[46px] h-[46px] rounded-full bg-bg-cream border border-primary/30 grid place-items-center mx-auto mb-4">
                    <span className="color-primary font-cormorant text-[18px] text-primary font-bold">{inc.num}</span>
                  </div>
                  <h3 className="font-cormorant text-[19px] font-semibold text-text-dark">{inc.title}</h3>
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
