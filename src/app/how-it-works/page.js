"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Upload Your Memories",
      desc: "Share photographs, video clips, voice notes and the little details only you know. Everything, privately and securely.",
      placeholder: "step 01 · upload your memories",
      alignLeft: true
    },
    {
      num: "02",
      title: "We Understand the Story",
      desc: "A storyteller sits with your material to find the thread — the people, the feeling, the moment it all turns on.",
      placeholder: "step 02 · we understand the story",
      alignLeft: false
    },
    {
      num: "03",
      title: "Creative Editing",
      desc: "We shape a narrative with music, pacing and voice — the craft that turns clips into a film that moves you.",
      placeholder: "step 03 · creative editing",
      alignLeft: true
    },
    {
      num: "04",
      title: "You Review",
      desc: "You watch the first cut in private and tell us what sings and what to soften. Your family, your call.",
      placeholder: "step 04 · you review",
      alignLeft: false
    },
    {
      num: "05",
      title: "Refinement",
      desc: "We refine colour, sound and timing until every second feels right — no detail too small.",
      placeholder: "step 05 · refinement",
      alignLeft: true
    },
    {
      num: "06",
      title: "Delivery",
      desc: "Your finished film arrives beautifully packaged, ready to watch, share and keep forever.",
      placeholder: "step 06 · delivery",
      alignLeft: false
    }
  ];

  const inclusions = [
    { num: "01", title: "Photo Restoration", desc: "We revive faded, torn and creased photographs to their former glory." },
    { num: "02", title: "Storytelling", desc: "A narrative written around your family, in your own words." },
    { num: "03", title: "Colour Grading", desc: "Warm, filmic colour that makes every scene feel timeless." },
    { num: "04", title: "Motion & Animation", desc: "Gentle movement that brings still photographs to life." },
    { num: "05", title: "Original Music", desc: "Scored to match the emotion of your story." },
    { num: "06", title: "Cinematic Editing", desc: "Paced and cut by hand for maximum feeling." },
    { num: "07", title: "Premium Delivery", desc: "Delivered in elegant packaging, ready to gift." },
    { num: "08", title: "Unlimited Care", desc: "We stay with you until every moment feels right." }
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
                <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">How It Works</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-cormorant font-normal text-[40px] md:text-[70px] leading-[1.04] mb-5 text-text-dark">
                  How we bring<br />
                  memories <span className="italic text-primary">to life.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[16.5px] leading-relaxed text-text-gray max-w-[460px]">
                  From a shoebox of photographs to a film that moves a room to tears — here is the quiet, careful craft behind every Journeys of Life story.
                </p>
              </Reveal>
            </div>

            <Reveal className="relative aspect-[5/4] rounded-[200px_24px_200px_24px] overflow-hidden shadow-[0_40px_90px_-34px_rgba(110,86,68,0.55)]">
              <ImageSlot id="how-hero" shape="rect" placeholder="Editor colour-grading a family film · warm studio" />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark/20 via-transparent to-primary-light/20 pointer-events-none"></div>
            </Reveal>
          </div>
        </section>

        {/* ============ PROCESS TIMELINE ============ */}
        <section className="py-[110px] bg-bg-cream">
          <div className="max-w-[1040px] mx-auto px-6 md:px-10">
            
            <Reveal className="flex items-center justify-center gap-3.5 mb-4">
              <span className="w-9 h-[1px] bg-primary"></span>
              <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">The Process</span>
              <span className="w-9 h-[1px] bg-primary"></span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-center font-cormorant font-normal text-[30px] md:text-[52px] mb-16 text-text-dark">
                Six careful steps, one timeless film.
              </h2>
            </Reveal>

            {/* Timeline wrapper */}
            <div className="relative">
              {/* Vertical center line */}
              <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent -translate-x-[0.5px]"></div>

              {steps.map((step, i) => (
                <Reveal 
                  key={step.num} 
                  delay={0.05} 
                  className={`grid grid-cols-[60px_1fr] md:grid-cols-[1fr_88px_1fr] items-center mb-11 last:mb-0`}
                >
                  
                  {/* LEFT COLUMN */}
                  <div className={`pl-4 md:pl-0 ${step.alignLeft ? "md:text-right md:pr-4.5 order-2 md:order-1" : "hidden md:block order-2 md:order-1"}`}>
                    {step.alignLeft ? (
                      <>
                        <h3 className="font-cormorant font-semibold text-[24px] md:text-[27px] mb-2 text-text-dark">{step.title}</h3>
                        <p className="text-[14.5px] leading-relaxed text-text-gray">{step.desc}</p>
                      </>
                    ) : (
                      <div className="relative aspect-[5/3] rounded-2xl overflow-hidden shadow-lg border border-primary/10">
                        <ImageSlot id={`how-step-${i}`} shape="rect" placeholder={step.placeholder} />
                      </div>
                    )}
                  </div>

                  {/* CENTER NODE */}
                  <div className="flex justify-center items-center order-1 md:order-2">
                    <span className="w-[60px] h-[60px] rounded-full bg-[#1E1B18] text-[#D6B36A] flex items-center justify-center font-cormorant text-[22px] shadow-[0_0_0_6px_#F8F5EF,0_0_0_7px_rgba(179,138,66,0.35)]">
                      {step.num}
                    </span>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className={`pl-4 md:pl-0 ${step.alignLeft ? "hidden md:block order-3" : "md:pl-4.5 order-2 md:order-3"}`}>
                    {!step.alignLeft ? (
                      <>
                        <h3 className="font-cormorant font-semibold text-[24px] md:text-[27px] mb-2 text-text-dark">{step.title}</h3>
                        <p className="text-[14.5px] leading-relaxed text-text-gray">{step.desc}</p>
                      </>
                    ) : (
                      <div className="relative aspect-[5/3] rounded-2xl overflow-hidden shadow-lg border border-primary/10">
                        <ImageSlot id={`how-step-${i}`} shape="rect" placeholder={step.placeholder} />
                      </div>
                    )}
                  </div>

                  {/* Mobile details helper when hidden on smaller screens */}
                  <div className="col-span-2 pl-[76px] mt-2 block md:hidden order-3">
                    {!step.alignLeft && (
                      <div className="relative aspect-[5/3] rounded-2xl overflow-hidden shadow-lg border border-primary/10 mt-3">
                        <ImageSlot id={`how-step-mob-${i}`} shape="rect" placeholder={step.placeholder} />
                      </div>
                    )}
                    {step.alignLeft && (
                      <div className="relative aspect-[5/3] rounded-2xl overflow-hidden shadow-lg border border-primary/10 mt-3">
                        <ImageSlot id={`how-step-mob-${i}`} shape="rect" placeholder={step.placeholder} />
                      </div>
                    )}
                  </div>

                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ============ WHY TRUST US ============ */}
        <section className="py-[100px] bg-gradient-to-b from-bg-cream to-bg-tan">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal className="flex items-center justify-center gap-3.5 mb-4">
              <span className="w-9 h-[1px] bg-primary"></span>
              <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">Why Families Trust Us</span>
              <span className="w-9 h-[1px] bg-primary"></span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-center font-cormorant font-normal text-[30px] md:text-[52px] mb-16 text-text-dark">
                Handcrafted, human, and made to last.
              </h2>
            </Reveal>

            {/* Alternating feature rows */}
            <div className="flex flex-col gap-16 md:gap-24">
              {/* Row 1 */}
              <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_28px_60px_-30px_rgba(110,86,68,0.55)] md:order-1">
                  <ImageSlot id="why-1" shape="rect" placeholder="editor at work · warm studio" />
                </div>
                <div className="md:order-2">
                  <h3 className="font-cormorant font-semibold text-[26px] md:text-[38px] leading-tight mb-3.5 text-text-dark">Handcrafted, never automated</h3>
                  <p className="text-[15.5px] leading-relaxed text-[#7C7267] max-w-[440px]">
                    Every frame is shaped by a human editor who cares about your family as much as you do. No templates, no shortcuts.
                  </p>
                </div>
              </Reveal>

              {/* Row 2 */}
              <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_28px_60px_-30px_rgba(110,86,68,0.55)] md:order-2">
                  <ImageSlot id="why-2" shape="rect" placeholder="team reviewing footage" />
                </div>
                <div className="md:order-1">
                  <h3 className="font-cormorant font-semibold text-[26px] md:text-[38px] leading-tight mb-3.5 text-text-dark">Real people. No AI.</h3>
                  <p className="text-[15.5px] leading-relaxed text-[#7C7267] max-w-[440px]">
                    Your memories are handled by storytellers, not algorithms. The warmth you feel is genuinely, entirely human.
                  </p>
                </div>
              </Reveal>

              {/* Row 3 */}
              <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_28px_60px_-30px_rgba(110,86,68,0.55)] md:order-1">
                  <ImageSlot id="why-3" shape="rect" placeholder="hands holding photographs" />
                </div>
                <div className="md:order-2">
                  <h3 className="font-cormorant font-semibold text-[26px] md:text-[38px] leading-tight mb-3.5 text-text-dark">Private &amp; secure, always</h3>
                  <p className="text-[15.5px] leading-relaxed text-[#7C7267] max-w-[440px]">
                    Your photographs and stories stay yours. Encrypted, confidential, and never shared without your word.
                  </p>
                </div>
              </Reveal>

              {/* Row 4 */}
              <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_28px_60px_-30px_rgba(110,86,68,0.55)] md:order-2">
                  <ImageSlot id="why-4" shape="rect" placeholder="grandparents & grandchildren" />
                </div>
                <div className="md:order-1">
                  <h3 className="font-cormorant font-semibold text-[26px] md:text-[38px] leading-tight mb-3.5 text-text-dark">Built to become a legacy</h3>
                  <p className="text-[15.5px] leading-relaxed text-[#7C7267] max-w-[440px]">
                    We make films to be handed down — archival quality that your grandchildren will one day treasure.
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* ============ WHAT YOU RECEIVE ============ */}
        <section className="py-[100px] bg-bg-tan">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <Reveal className="flex items-center justify-center gap-3.5 mb-4">
              <span className="w-9 h-[1px] bg-primary"></span>
              <span className="text-[11px] tracking-[0.36em] uppercase text-primary font-semibold">What You Receive</span>
              <span className="w-9 h-[1px] bg-primary"></span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-center font-cormorant font-normal text-[30px] md:text-[52px] mb-14 text-text-dark">
                Every film includes the full craft.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {inclusions.map((inc, i) => (
                <Reveal 
                  key={inc.num} 
                  delay={0.07 * (i % 4)} 
                  className="bg-white rounded-2xl p-7.5 shadow-[0_18px_40px_-28px_rgba(110,86,68,0.5)] border border-primary/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-bg-cream border border-primary/30 grid place-items-center mb-[18px]">
                    <span className="font-cormorant text-primary text-xl font-bold">{inc.num}</span>
                  </div>
                  <h3 className="font-cormorant font-semibold text-[21px] mb-2 text-text-dark">{inc.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-text-gray">{inc.desc}</p>
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
