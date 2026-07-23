"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function TestimonialsPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideTimer = useRef(null);

  const carouselSlides = [
    {
      id: "test-photo-0",
      rating: "★★★★★",
      quote: "They gave us something we will treasure forever. Every time we watch it, we cry — the good kind.",
      author: "Ananya & Karthik",
      info: "Wedding Film · Bengaluru",
      placeholder: "happy family portrait"
    },
    {
      id: "test-photo-1",
      rating: "★★★★★",
      quote: "It felt like reliving our wedding. My mother watched it four times the first evening.",
      author: "The Sharma Family",
      info: "Anniversary Film · Delhi",
      placeholder: "happy family portrait"
    },
    {
      id: "test-photo-2",
      rating: "★★★★★",
      quote: "My parents cried watching it. That alone was worth everything.",
      author: "Ishaan Mehta",
      info: "Family Documentary · Ahmedabad",
      placeholder: "happy family portrait"
    },
    {
      id: "test-photo-3",
      rating: "★★★★★",
      quote: "The best gift we have ever purchased — for ourselves and for our children after us.",
      author: "Fatima & Zaid",
      info: "Heritage Film · Hyderabad",
      placeholder: "happy family portrait"
    }
  ];

  const extraReviews = [
    { rating: "★★★★★", quote: "Watching our daughter’s birthday film brought tears to our eyes.", author: "Priya & Rohan" },
    { rating: "★★★★★", quote: "The greatest keepsake we could have asked for.", author: "The Nair Family" },
    { rating: "★★★★★", quote: "They found a story in our old photos we had forgotten was there.", author: "Sunita R." },
    { rating: "★★★★★", quote: "Handcrafted, patient, and deeply human. Rare these days.", author: "Deepak & Asha" },
    { rating: "★★★★★", quote: "Our grandparents finally have a film of their own.", author: "The Iyer Family" },
    { rating: "★★★★★", quote: "Worth every rupee. We gift these to family now.", author: "Neha K." }
  ];

  const resetTimer = () => {
    if (slideTimer.current) {
      clearInterval(slideTimer.current);
    }
    slideTimer.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % carouselSlides.length);
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (slideTimer.current) {
        clearInterval(slideTimer.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setActiveSlide(prev => (prev + 1) % carouselSlides.length);
    resetTimer();
  };

  const prevSlide = () => {
    setActiveSlide(prev => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    resetTimer();
  };

  const selectSlide = (index) => {
    setActiveSlide(index);
    resetTimer();
  };

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
                <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">Testimonials</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-cormorant font-normal text-[40px] md:text-[70px] leading-[1.04] mb-5 text-text-dark">
                  Loved by families,<br />
                  <span className="italic text-primary">everywhere.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[16.5px] leading-relaxed text-text-gray max-w-[460px]">
                  We measure our work in tears, in re-watches, in films passed quietly from one generation to the next. Here is what families tell us.
                </p>
              </Reveal>
            </div>

            <Reveal className="relative aspect-[5/4] rounded-[200px_24px_200px_24px] overflow-hidden shadow-[0_40px_90px_-34px_rgba(110,86,68,0.55)]">
              <ImageSlot id="test-hero" shape="rect" placeholder="Family watching their film together · emotional" />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark/20 via-transparent to-primary-light/20 pointer-events-none"></div>
            </Reveal>
          </div>
        </section>

        {/* ============ CAROUSEL SECTION ============ */}
        <section className="py-[100px] bg-bg-cream">
          <div className="max-w-[1040px] mx-auto px-6 md:px-10">
            <Reveal className="relative">
              
              {/* Carousel Track */}
              <div className="relative min-h-[500px] sm:min-h-[380px] md:min-h-[340px]">
                {carouselSlides.map((slide, i) => {
                  const isActive = i === activeSlide;
                  return (
                    <figure 
                      key={slide.id}
                      className={`margin-0 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-11 items-center transition-all duration-700 ease-in-out ${
                        isActive 
                          ? "opacity-100 pointer-events-auto relative scale-100" 
                          : "opacity-0 pointer-events-none absolute inset-0 scale-95"
                      }`}
                    >
                      <div className="relative aspect-[4/5] max-w-[280px] md:max-w-none mx-auto w-full rounded-2xl overflow-hidden shadow-[0_28px_60px_-30px_rgba(110,86,68,0.55)] border border-primary/10">
                        <ImageSlot id={slide.id} shape="rect" placeholder={slide.placeholder} />
                      </div>
                      
                      <div className="text-center md:text-left">
                        <div className="text-primary text-[16px] tracking-widest mb-5">{slide.rating}</div>
                        <blockquote className="font-cormorant italic text-[26px] md:text-[38px] leading-tight text-text-dark mb-6">
                          "{slide.quote}"
                        </blockquote>
                        <div className="font-cormorant text-[20px] text-text-dark font-medium">{slide.author}</div>
                        <div className="text-[11.5px] tracking-[0.16em] uppercase text-text-gray font-semibold mt-1">
                          {slide.info}
                        </div>
                      </div>
                    </figure>
                  );
                })}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-5 mt-9">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 border border-[#6E5644]/30 rounded-full flex items-center justify-center text-primary-dark hover:bg-primary hover:border-primary hover:text-bg-dark transition-all duration-300 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 6l-6 6 6 6" />
                  </svg>
                </button>

                <div className="flex gap-2.5">
                  {carouselSlides.map((_, i) => (
                    <span 
                      key={i}
                      onClick={() => selectSlide(i)}
                      className={`h-2 rounded-full cursor-pointer transition-all duration-500 ${
                        i === activeSlide 
                          ? "w-6.5 bg-primary" 
                          : "w-2 bg-[#6E5644]/30"
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 border border-[#6E5644]/30 rounded-full flex items-center justify-center text-primary-dark hover:bg-primary hover:border-primary hover:text-bg-dark transition-all duration-300 cursor-pointer"
                  aria-label="Next slide"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>

            </Reveal>
          </div>
        </section>

        {/* ============ TRUST STATS ============ */}
        <section className="bg-bg-cream py-[100px] border-y border-[#6E5644]/10">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <Reveal>
              <div className="font-cormorant text-[54px] text-primary leading-none font-medium">
                <CountUp end={500} />+
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-text-gray font-semibold mt-2">Stories Told</div>
            </Reveal>
            
            <Reveal delay={0.08}>
              <div className="font-cormorant text-[54px] text-primary leading-none font-medium">
                <CountUp end={98} />%
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-text-gray font-semibold mt-2">Happy Families</div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="font-cormorant text-[54px] text-primary leading-none font-medium">
                <CountUp end={4.9} decimals={1} />
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-text-gray font-semibold mt-2">Average Rating</div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="font-cormorant text-[54px] text-primary leading-none font-medium">
                4.9
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-text-gray font-semibold mt-2">On Google Reviews</div>
            </Reveal>
          </div>
        </section>

        {/* ============ IN THEIR WORDS ============ */}
        <section className="py-[70px] pb-[110px] bg-gradient-to-b from-bg-cream to-bg-tan">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal className="flex items-center justify-center gap-3.5 mb-4">
              <span className="w-9 h-[1px] bg-primary"></span>
              <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">In Their Words</span>
              <span className="w-9 h-[1px] bg-primary"></span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-center font-cormorant font-normal text-[28px] md:text-[46px] mb-12 text-text-dark">
                A few more of the notes we keep close.
              </h2>
            </Reveal>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {extraReviews.map((rev, i) => (
                <Reveal 
                  key={i} 
                  delay={0.06 * (i % 3)} 
                  className="break-inside-avoid mb-6 bg-white rounded-2xl p-[28px_30px] shadow-[0_16px_38px_-26px_rgba(110,86,68,0.5)] border border-primary/5"
                >
                  <div className="text-primary text-[14px] tracking-widest mb-3.5">{rev.rating}</div>
                  <p className="font-cormorant italic text-[20px] leading-relaxed mb-3.5 text-text-dark">
                    "{rev.quote}"
                  </p>
                  <span className="text-[11px] tracking-[0.14em] uppercase text-text-gray font-semibold">{rev.author}</span>
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
