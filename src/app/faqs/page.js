"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";

export default function FAQsPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      q: "How do I share my photos and videos?",
      a: "You can upload everything through a private, secure link we send you — photographs, video clips, voice notes, even scanned letters. If you prefer, we can arrange to collect physical prints and return them safely."
    },
    {
      q: "Do you use AI to make the films?",
      a: "No. Every film is crafted by a human editor and storyteller. AI cannot feel what your family felt — and that feeling is the whole point. The warmth you see is genuinely human."
    },
    {
      q: "How long does a film take?",
      a: "A Memory Film typically takes 2–3 weeks; a Legacy Film 4–6 weeks; a Heritage Documentary 8–10 weeks, depending on shoot schedules. We'll give you a clear timeline before we begin."
    },
    {
      q: "Can you restore old or damaged photographs?",
      a: "Yes — restoration is included in every package. We revive faded, torn, creased and water-damaged photos, and can gently colourise black-and-white images where it suits the story."
    },
    {
      q: "Is my content kept private?",
      a: "Always. Your memories are encrypted, confidential and never shared or used without your explicit permission. They remain entirely yours."
    },
    {
      q: "What if I want changes after the first cut?",
      a: "Every package includes revision rounds. You watch the first cut in private and tell us what to adjust — we refine until it feels exactly right."
    },
    {
      q: "How is the finished film delivered?",
      a: "You receive a beautifully packaged digital film, plus optional premium physical delivery and a printed coffee-table book on the Heritage package. Everything is archived in secure cloud storage."
    },
    {
      q: "Can we add family members who live abroad?",
      a: "Absolutely. We regularly gather clips, voice notes and interviews from relatives across the world and weave them seamlessly into one film."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
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
                <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">FAQs</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-cormorant font-normal text-[40px] md:text-[70px] leading-[1.04] mb-5 text-text-dark">
                  Questions,<br />
                  <span className="italic text-primary">answered.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[16.5px] leading-relaxed text-text-gray max-w-[460px]">
                  Everything you might want to know before we begin your family's film. Still curious? We'd love to talk.
                </p>
              </Reveal>
            </div>

            <Reveal className="relative aspect-[5/4] rounded-[200px_24px_200px_24px] overflow-hidden shadow-[0_40px_90px_-34px_rgba(110,86,68,0.55)]">
              <ImageSlot id="faq-hero" shape="rect" placeholder="Warm hands writing a letter · soft light" />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark/20 via-transparent to-primary-light/20 pointer-events-none"></div>
            </Reveal>
          </div>
        </section>

        {/* ============ ACCORDION SECTION ============ */}
        <section className="py-[90px] pb-[100px] bg-bg-cream">
          <div className="max-w-[860px] mx-auto px-6 md:px-10">
            <div className="flex flex-col gap-3.5">
              {faqs.map((faq, i) => {
                const isOpen = i === expandedIndex;
                return (
                  <Reveal 
                    key={i} 
                    delay={0.03 * (i % 2)} 
                    className={`bg-white border rounded-2xl overflow-hidden shadow-[0_12px_30px_-26px_rgba(110,86,68,0.5)] transition-colors duration-300 ${
                      isOpen ? "border-primary/50" : "border-[#6E5644]/12"
                    }`}
                  >
                    <button 
                      onClick={() => toggleFaq(i)}
                      className="w-full flex items-center justify-between gap-5 bg-transparent border-none p-6 md:p-7.5 cursor-pointer text-left focus:outline-none"
                    >
                      <span className="font-cormorant text-[20px] md:text-[22px] font-semibold text-text-dark leading-snug">
                        {faq.q}
                      </span>
                      <span 
                        className={`flex-none w-8 h-8 rounded-full border border-primary/40 grid place-items-center transition-all duration-400 ${
                          isOpen ? "rotate-135 bg-primary/15" : "rotate-0 bg-transparent"
                        }`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B38A42" strokeWidth="1.6">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    
                    {/* Collapsible Answer */}
                    <div 
                      className="overflow-hidden transition-all duration-500 ease-in-out"
                      style={{ maxHeight: isOpen ? "200px" : "0px" }}
                    >
                      <p className="text-[15px] leading-relaxed text-text-gray p-[0_28px_26px_28px]">
                        {faq.a}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Bottom Callout */}
            <Reveal className="text-center mt-12.5 p-10 bg-bg-tan border border-primary/5 rounded-3xl">
              <p className="font-cormorant italic text-[26px] mb-4.5 text-text-dark font-medium">Still have a question on your mind?</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-bg-dark text-bg-cream px-7.5 py-3.5 rounded-full text-[11.5px] tracking-[0.16em] uppercase font-semibold transition-all hover:bg-primary hover:text-bg-dark"
              >
                Talk to us 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </Reveal>

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
